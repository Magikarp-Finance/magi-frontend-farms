import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
	{
		pid: 14,
		risk: 5,
		lpSymbol: 'LABO-GYA LP',
		lpAddresses: {
			97: '',
			56: '0x75e2661694bbf06359d5f81bd7b57e980a45644d'
		},
		tokenSymbol: 'GYA',
		tokenAddresses: {
			97: '',
			56: '0x9458784486fb00c2d1a8740d5579207c42dbd602'
		},
		quoteTokenSymbol: QuoteToken.LABO,
		quoteTokenAdresses: contracts.labo,
		isHighlight: true
	},
	/*
	{
		pid: 15,
		risk: 3,
		lpSymbol: 'DSL-GYA LP',
		isTokenOnly: false,
		lpAddresses: {
			97: '',
			56: '0x932Cc6b80B1592e99b78c45c9f5ca2dD13bE20a7' // bnb - busd
		},
		tokenSymbol: 'GYA',
		tokenAddresses: {
			97: '',
			56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
		},
		quoteTokenSymbol: QuoteToken.DSL,
		quoteTokenAdresses: contracts.dsl
	},
	*/

	{
		pid: 0,
		risk: 5,
		lpSymbol: 'GYA-BUSD LP',
		lpAddresses: {
			97: '',
			56: '0xfba76D17Ed68C3c67540e9B6238bdD8Ff6877b89'
		},
		tokenSymbol: 'GYA',
		tokenAddresses: {
			97: '',
			56: '0x9458784486fb00c2d1a8740d5579207c42dbd602'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd
	},
	{
		pid: 1,
		risk: 5,
		lpSymbol: 'GYA-BNB LP',
		lpAddresses: {
			97: '',
			56: '0x315ba9DE24997f39f0Ba818F7266f6d01bBCcd9c'
		},
		tokenSymbol: 'GYA',
		tokenAddresses: {
			97: '',
			56: '0x9458784486fb00c2d1a8740d5579207c42dbd602'
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
		isHighlight: true
	},
	{
		pid: 10,
		risk: 3,
		lpSymbol: 'GYA-MAGI LP',
		lpAddresses: {
			97: '',
			56: '0x7248953e6CF8927b8a3942ccbEb61e00559Dd3A5'
		},
		tokenSymbol: 'MAGI',
		tokenAddresses: {
			97: '',
			56: '0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c'
		},
		quoteTokenSymbol: QuoteToken.CAKE,
		quoteTokenAdresses: contracts.cake,
		isHighlight: true
	},
	{
		pid: 3,
		risk: 1,
		lpSymbol: 'MAGI-BNB LP',
		lpAddresses: {
			97: '',
			56: '0xcf6aadc9cd4e572f5e96426a58da70984881e887'
		},
		tokenSymbol: 'MAGI',
		tokenAddresses: {
			97: '',
			56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c'
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
		isHighlight: true
	},
	{
		pid: 2,
		risk: 2,
		lpSymbol: 'MAGI-BUSD LP',
		lpAddresses: {
			97: '',
			56: '0xdc62acf334806de4fc63949f2aa76fdb81bb630d'
		},
		tokenSymbol: 'MAGI',
		tokenAddresses: {
			97: '',
			56: '0xc603b1fba6a5b502be4f1ab27591bf4e75a3460c'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd,
		isHighlight: true
	},
	{
		pid: 4,
		risk: 2,
		lpSymbol: 'BNB-BUSD LP',
		lpAddresses: {
			97: '',
			56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f'
		},
		tokenSymbol: 'bnb',
		tokenAddresses: {
			97: '',
			56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd
	},
	{
		pid: 5,
		risk: 5,
		lpSymbol: 'CAKE-BNB LP',
		lpAddresses: {
			97: '',
			56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6'
		},
		tokenSymbol: 'cake',
		tokenAddresses: {
			97: '',
			56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb
	},
	{
		pid: 6,
		risk: 3,
		lpSymbol: 'CAKE-BUSD LP',
		lpAddresses: {
			97: '',
			56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458'
		},
		tokenSymbol: 'cake',
		tokenAddresses: {
			97: '',
			56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd
	},
	{
		pid: 7,
		risk: 3,
		lpSymbol: 'ETH-BNB LP',
		lpAddresses: {
			97: '',
			56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422'
		},
		tokenSymbol: 'eth',
		tokenAddresses: {
			97: '',
			56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb
	},
	{
		pid: 8,
		risk: 3,
		lpSymbol: 'BTCB-BNB LP',
		lpAddresses: {
			97: '',
			56: '0x7561eee90e24f3b348e1087a005f78b4c8453524'
		},
		tokenSymbol: 'BTCB',
		tokenAddresses: {
			97: '',
			56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb
	},
	{
		pid: 9,
		risk: 3,
		lpSymbol: 'GYA',
		isTokenOnly: true,
		lpAddresses: {
			97: '',
			56: '0xfba76D17Ed68C3c67540e9B6238bdD8Ff6877b89'
		},
		tokenSymbol: 'GYA',
		tokenAddresses: {
			97: '',
			56: '0x9458784486fb00c2d1a8740d5579207c42dbd602'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd
	},
	/*
	{
		pid: 11,
		risk: 3,
		lpSymbol: 'BAKE',
		isTokenOnly: true,
		lpAddresses: {
			97: '',
			56: '0x6E218EA042BeF40a8baF706b00d0f0A7b4fCE50a' // Bake - busd
		},
		tokenSymbol: 'BAKE',
		tokenAddresses: {
			97: '',
			56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5'
		},
		quoteTokenSymbol: QuoteToken.CAKE,
		quoteTokenAdresses: contracts.busd
	},
	*/

	{
		pid: 12,
		risk: 3,
		lpSymbol: 'CAKE',
		isTokenOnly: true,
		lpAddresses: {
			97: '',
			56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458' // Bake - busd
		},
		tokenSymbol: 'CAKE',
		tokenAddresses: {
			97: '',
			56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd
	},

	/*
	{
		pid: 12,
		risk: 3,
		lpSymbol: 'LABFINANCE',
		isTokenOnly: true,
		lpAddresses: {
			97: '',
			56: '0x6E218EA042BeF40a8baF706b00d0f0A7b4fCE50a' // Bake - busd
		},
		tokenSymbol: 'LABFINANCE',
		tokenAddresses: {
			97: '',
			56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5'
		},
		quoteTokenSymbol: QuoteToken.LABFINANCE,
		quoteTokenAdresses: contracts.busd
	},
*/

	{
		pid: 13,
		risk: 3,
		lpSymbol: 'WBNB',
		isTokenOnly: true,
		lpAddresses: {
			97: '',
			56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f' // bnb - busd
		},
		tokenSymbol: 'BNB',
		tokenAddresses: {
			97: '',
			56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd
	}
]

export default farms
