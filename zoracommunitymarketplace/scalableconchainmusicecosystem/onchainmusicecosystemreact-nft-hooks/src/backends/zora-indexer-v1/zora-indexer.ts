import { gql } from 'graphql-request';

const MEDIA_FRAGMENTS = gql`
  fragment V3AskPart on V3Ask {
    askPrice
    askCurrency
    status
    seller
    findersFeeBps
    finder
    events {
      eventType
      address
      transactionHash
      blockNumber
      blockTimestamp
    }
  }

  fragment IndexerTokenPart on Token {
    id
    tokenId
    owner
    address
    tokenContract {
      name
      symbol
      address
      supportsMetadata
    }
    tokenURI
    minter
    metadata {
      json
    }
    mintTransferEvent {
      transactionHash
      blockTimestamp
      blockNumber
    }
    media {
      contentURI
      contentHash
      metadataHash
      metadataURI
      ownerBidShare
      creatorBidShare
    }
    v3Ask {
      ...V3AskPart
    }
  }
  fragment AuctionBidEventPart on AuctionBidEvent {
    id
    value
    sender
    transactionHash
    blockNumber
    blockTimestamp
  }
  fragment IndexerAuctionPart on Auction {
    winner
    lastBidAmount
    duration
    tokenId
    auctionId
    approved
    tokenContract
    reservePrice
    firstBidTime
    expiresAt
    tokenOwner
    curator
    curatorFee
    curatorFeePercentage
    createdEvent {
      blockNumber
      blockTimestamp
      transactionHash
    }
    currency {
      name
      symbol
      decimals
      address
    }
    canceledEvent {
      transactionHash
      blockNumber
      blockTimestamp
    }
    endedEvent {
      transactionHash
      blockNumber
      blockTimestamp
    }
    bidEvents {
      ...AuctionBidEventPart
    }
  }
  fragment IndexerAuctionWithToken on Auction {
    ...IndexerAuctionPart
    token {
      ...IndexerTokenPart
    }
  }
`;

const TOKEN_TRANSFER_EVENTS = gql`
  fragment TokenTransferEventInfo on TokenTransferEvent {
    from
    to
    tokenId
    address
    blockTimestamp
    blockNumber
    transactionHash
  }
`;

const BASE_FRAGMENTS = gql`
  ${MEDIA_FRAGMENTS}
  ${TOKEN_TRANSFER_EVENTS}

  fragment IndexerTokenWithAuction on Token {
    ...IndexerTokenPart
    auctions {
      ...IndexerAuctionPart
    }
  }
`;

const DETAIL_FRAGMENTS = gql`
  fragment V3EventPart on Event {
    eventType
    address
    blockNumber
    blockTimestamp
    transactionHash
    details
  }

  fragment IndexerTokenWithAuctionDetail on Token {
    transferEvents {
      ...TokenTransferEventInfo
    }
    # Ask events
    v3Events {
      ...V3EventPart
    }
  }
`;

// Get list of nfts owned by user from contracts
export const BY_OWNER = gql`
  ${BASE_FRAGMENTS}
  query byOwner(
    $addressQueryPart: String_comparison_exp!
    $owner: String
    $offset: Int
    $limit: Int
  ) @cached {
    Token(
      limit: $limit
      offset: $offset
      where: {
        address: $addressQueryPart
        _or: [
          { owner: { _eq: $owner } }
          {
            auctions: {
              _and: [
                { _not: { endedEvent: {} } }
                { _not: { canceledEvent: {} } }
                { tokenOwner: { _eq: $owner } }
              ]
            }
          }
        ]
      }
    ) {
      ...IndexerTokenWithAuction
    }
  }
`;

export const BY_IDS = gql`
  ${BASE_FRAGMENTS}
  ${DETAIL_FRAGMENTS}

  query byIds($ids: [String!]) @cached {
    Token(where: { id: { _in: $ids } }) {
      ...IndexerTokenWithAuction
      ...IndexerTokenWithAuctionDetail
    }
  }
`;

export const ACTIVE_AUCTIONS_QUERY = gql`
  ${BASE_FRAGMENTS}
  query activeAuctionsQuery(
    $andQuery: [Token_bool_exp!]
    $orderBy: [Token_order_by!]
    $limit: Int
    $offset: Int
  ) @cached {
    Token(
      where: { _and: $andQuery }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      ...IndexerTokenWithAuction
    }
  }
`;

export const TOKENS_WITHOUT_AUCTIONS = gql`
  ${MEDIA_FRAGMENTS}
  query tokensWithoutAuctions($addresses: [String!], $limit: Int, $offset: Int) @cached {
    Token(
      where: {
        address: { _in: $addresses }
        _not: { auctions: {} }
        owner: { _neq: "0x0000000000000000000000000000000000000000" }
      }
      limit: $limit
      offset: $offset
    ) {
      ...IndexerTokenPart
    }
  }
`;
