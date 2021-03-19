import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'GYA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xa90bec56fc16e48251977fb137187a2bf69c670b',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xa2f9532eae96aecc6eb62051d13c5c72b26afc90',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'GYA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x081ca139a7d2a22f1bf45b80a3f50542615b43a6',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xa2f9532eae96aecc6eb62051d13c5c72b26afc90',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'bnb',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'GYA-MAGI LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'GYA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 3,
  //   risk: 1,
  //   lpSymbol: 'MAGI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcf6aadc9cd4e572f5e96426a58da70984881e887',
  //   },
  //   tokenSymbol: 'MAGI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   risk: 2,
  //   lpSymbol: 'MAGI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdc62acf334806de4fc63949f2aa76fdb81bb630d',
  //   },
  //   tokenSymbol: 'MAGI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'cake',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   risk: 3,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'cake',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 5,
  //   risk: 3,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'eth',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 3,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 7,
  //   risk: 3,
  //   lpSymbol: 'GYA',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb28a0761c445e483634cc1225df9f860799f6d24',
  //   },
  //   tokenSymbol: 'gya',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
