import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Umbreon-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc0f6f1b579b4384a1bad1a83b2b54dbdd83ccc76',
    },
    tokenSymbol: 'Umbreon',
    tokenAddresses: {
      97: '',
      56: '0xf87b5c7f7061fc261f176f23683a67d8da44aef3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Umbreon-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x84d4c5b582b33bea115e5bd0d5e97b540bfe6b8e',
    },
    tokenSymbol: 'Umbreon',
    tokenAddresses: {
      97: '',
      56: '0xf87b5c7f7061fc261f176f23683a67d8da44aef3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'Absol-Umbreon LP',
    isCommunity: true,
    lpAddresses: {
      97: '',
      56: '0x8341149ff54667279c478aea4eb89a9e4619dbd5',
    },
    tokenSymbol: 'absol',
    tokenAddresses: {
      97: '',
      56: '0xf87b5c7f7061fc261f176f23683a67d8da44aef3',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'MAGI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcf6aadc9cd4e572f5e96426a58da70984881e887',
    },
    tokenSymbol: 'magi',
    tokenAddresses: {
      97: '',
      56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'MAGI-Umbreon LP',
    lpAddresses: {
      97: '',
      56: '0xd61c89ad30ff860afb0d118c0c4ee681854ce800',
    },
    tokenSymbol: 'magi',
    tokenAddresses: {
      97: '',
      56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 19,
    risk: 5,
    lpSymbol: 'KIRBY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x19c1cece37ded61225c6abdce00b67ffcbd50705',
    },
    tokenSymbol: 'kirby',
    tokenAddresses: {
      97: '',
      56: '0x23b360e387d9e4d2646609861e68adc621a3af82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'Absol-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4da004071603366751eab660f9da5b1f88ac26b3',
    },
    tokenSymbol: 'Absol',
    tokenAddresses: {
      97: '',
      56: '0xb90e4532d23180b67fcbe10ad581e34519b2987c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'Absol-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa07263f998cde31a93fc164a1f59eaa644423ace',
    },
    tokenSymbol: 'Absol',
    tokenAddresses: {
      97: '',
      56: '0xb90e4532d23180b67fcbe10ad581e34519b2987c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
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
    pid: 8,
    risk: 3,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Umbreon',
    lpAddresses: {
      97: '',
      56: '0xc0f6f1b579b4384a1bad1a83b2b54dbdd83ccc76', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'Umbreon',
    tokenAddresses: {
      97: '',
      56: '0xf87b5c7f7061fc261f176f23683a67d8da44aef3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 10,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'Absol',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4da004071603366751eab660f9da5b1f88ac26b3', // Absol-BUSD LP
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
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xc0f6f1b579b4384a1bad1a83b2b54dbdd83ccc76', // Umbreon-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // Cake-BUSD LP
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
    pid: 15,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
