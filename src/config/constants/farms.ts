import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'GYA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb28a0761c445e483634cc1225df9f860799f6d24',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
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
      56: '0x693e2d8e8460e4c4cb137c2716f791b456644cb9',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'MAGI - GYA',
  //   isCommunity: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'absol',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'GYA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb28a0761c445e483634cc1225df9f860799f6d24',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
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
      56: '0x693e2d8e8460e4c4cb137c2716f791b456644cb9',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'MAGI - GYA',
  //   isCommunity: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'absol',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 17,
  //   risk: 5,
  //   lpSymbol: 'MAGI - BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'magi',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 18,
  //   risk: 5,
  //   lpSymbol: 'MAGI - BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'magi',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'Absol-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4da004071603366751eab660f9da5b1f88ac26b3',
  //   },
  //   tokenSymbol: 'Absol',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xb90e4532d23180b67fcbe10ad581e34519b2987c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
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

  {
    pid: 3,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'cake',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'cake',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'eth',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'GYA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xb28a0761c445e483634cc1225df9f860799f6d24',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

  // {
  //   pid: 17,
  //   risk: 5,
  //   lpSymbol: 'MAGI - BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'magi',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 18,
  //   risk: 5,
  //   lpSymbol: 'MAGI-GYA LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   tokenSymbol: 'magi',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
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
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'cake',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'cake',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'eth',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'GYA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xb28a0761c445e483634cc1225df9f860799f6d24',
    },
    tokenSymbol: 'gya',
    tokenAddresses: {
      97: '',
      56: '0xE197baBfaa5eE12Cfc36f955f3cce84A4ae3A65B',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
