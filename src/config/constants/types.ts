export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
	id: string
	isActive: boolean
	address: string
	name: string
	subTitle?: string
	description?: string
	launchDate: string
	launchTime: string
	saleAmount: string
	raiseAmount: string
	cakeToBurn: string
	projectSiteUrl: string
	currency: string
	currencyAddress: string
	tokenDecimals: number
	releaseBlockNumber: number
}

export enum QuoteToken {
	'BNB' = 'BNB',
	'BLZD' = 'BLZD',
	'CAKE' = 'CAKE',
	'SYRUP' = 'SYRUP',
	'BUSD' = 'BUSD',
	'TWT' = 'TWT',
	'UST' = 'UST',
	'BAKE' = 'BAKE',
	'LABO' = 'LABO',
	'DSL' = 'DSL'
}

export enum PoolCategory {
	'COMMUNITY' = 'Community',
	'CORE' = 'Core',
	'BINANCE' = 'Binance' // Pools using native BNB behave differently than pools using a token
}

export interface Address {
	97?: string
	56: string
}

export interface Token {
	symbol: string
	address?: Address
	decimals?: number
	projectLink?: string
}

export interface FarmConfig {
	pid: number
	risk?: number
	lpSymbol: string
	lpAddresses: Address
	tokenSymbol: string
	tokenAddresses: Address
	quoteTokenSymbol: QuoteToken
	quoteTokenAdresses: Address
	multiplier?: string
	isTokenOnly?: boolean
	isCommunity?: boolean
	isHighlight?: boolean
	dual?: {
		rewardPerBlock: number
		earnLabel: string
		endBlock: number
	}
}

export interface PoolConfig {
	sousId: number
	earningToken: Token
	stakingToken: Token
	stakingLimit?: number
	contractAddress: Address
	poolCategory: PoolCategory
	tokenPerBlock: string
	sortOrder?: number
	harvest?: boolean
	isFinished?: boolean
	poolName: string
	isHighlighted?: boolean
	tagDisabled?: boolean
}

export type Nft = {
	name: string
	description: string
	originalImage: string
	previewImage: string
	blurImage: string
	sortOrder: number
	bunnyId: number
	collection?: string
	pathCollection: string
}
