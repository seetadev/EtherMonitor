# LIT Protocol for Data Security

We are using Lit protocol to  automate signing, reading, and writing road incident metadata (snapshots) and alarm viewer data to web3 decentralized networks (Ethereum and IPFS). 

We are able to:

1. Mint an NFT (client side)
2. Provision access to a resource (a web url) behind ownership of that NFT (client side)
3. Request a signed JWT from the Lit network to access that resource (client side)
4. Verify the signature on that JWT (server side)

The server is inside the file server.js.  The client is inside index.html

*We got the inspiration to use LIT from the lit-js-sdk located here: https://github.com/LIT-Protocol/lit-js-sdk*

## Running

To run this example, first install the packages by running "yarn install".  Then, you can serve it by running "yarn start" and then visit http://127.0.0.1:3000/ to try the example.
