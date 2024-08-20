import { defineChain } from '../../utils/chain/defineChain.js'

export const sanko = /*#__PURE__*/ defineChain({
  id: 1996,
  name: 'Sanko',
  nativeCurrency: {
    decimals: 18,
    name: 'Dream Machine Token',
    symbol: 'DMT',
  },
  rpcUrls: {
    default: {
      http: ['https://sanko.calderachain.xyz/http'],
      webSocket: ['wss://sanko.calderachain.xyz/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Sanko Chain Explorer',
      url: 'https://explorer.sanko.xyz',
      apiUrl: 'https://explorer.sanko.xyz/api/v2',
    },
  },
})