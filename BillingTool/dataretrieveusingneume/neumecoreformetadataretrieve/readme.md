
We are using neume recording audio based incidents where video is not possible to record. This will enable us to develop a socially scalable and open-source metadata retrieval, indexing, and management infrastructure for decentralized road incident management. Bandwidth is a major issue in India and neume protocol fits right at the spot for quick data retrieval where video is not possible due to high latency or unavailability of network for video streaming.

Please find the video at https://drive.google.com/drive/folders/1lxeHbPzLoF0DzDZkh9N7Z_5aTKjmdEza (screencapturewithoutsound.mov file and roadincidentmanagement.mp4)). We are also using it for decentralized social sharing of road incident data (please visit  Decentralizedroadcounselingatincidents.mov)

### prerequsites

neume-network-core is dependent on an Ethereum full node JSON-RPC interface.
Consider running your own node or choose an existing service from
[ethereumnodes.com](https://ethereumnodes.com/).

```bash
# Clone the repository
git clone git@github.com:neume-network/core.git

# Copy the example .env file
# ⚠️ Be sure to update the variables in `.env` with the appropriate values!
cp .env-copy .env

# Install the dependencies
npm i

# Install eth-fun as a peerDependency
npm i eth-fun --no-save
```

### how to run?

neume has a CLI which can be used to run strategies. Strategies are like React components which can extract, transform and load data.

The `crawl-path-file` specifies the sequence in which to run the strategies.

```sh
./neume.mjs --path <crawl-path-file>
```

`crawl_path.mjs` is a sample crawl path which can also be run through `npm run dev`.

## component contract

@neume-network/core guarantees the existence of variables and folders to other
@neume-network packages like @neume-network/strategies. Below, we outline what
core is currently guaranteeing:

### existence and definition of environment variables

@neume-network/core must guarantee the existence and definition of the
following environment variables:

```
RPC_HTTP_HOST=https://
DATA_DIR=data
EXTRACTION_WORKER_CONCURRENCY=12
IPFS_HTTPS_GATEWAY=https://
```

- If `RPC_HTTP_HOST` requires Bearer-token authorization, users must define
  `RPC_API_KEY` to be used in an HTTP `Authorization: Bearer ${RPC_API_KEY}`
  header.
- If `IPFS_HTTPS_GATEWAY` requires Bearer-token authorization, users must
  define `IPFS_HTTPS_GATEWAY_KEY` to be used in an HTTP `Authorization: Bearer ${IPFS_HTTPS_GATEWAY_KEY}` header.

### managing `DATA_DIR` and the file system directory

A directory containing the outputs of all @neume-network/strategies is called
the `DATA_DIR`. Apart from guaranteeing the environment variable's existence,
@neume-network/core must guarantee the directory's existence on the user's file
system.

## license

Licensed as [SPDX-License-Identifier: GPL-3.0-only](https://spdx.org/licenses/GPL-3.0-only.html)
