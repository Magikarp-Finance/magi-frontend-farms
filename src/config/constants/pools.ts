import tokens from './tokens'
import { PoolCategory, PoolConfig } from './types'

const pools: PoolConfig[] = [
	/*
	{
		sousId: 2,
		stakingToken: tokens.blzd,
		earningToken: tokens.bnb,
		contractAddress: {
			97: '',
			56: '0x481055C4182B9A5e90d8E7EDe9f65b957dC0Ec22'
		},
		poolCategory: PoolCategory.CORE,
		harvest: true,
		tokenPerBlock: '0.002480',
		sortOrder: 999,
		isFinished: false
	},
	{
		sousId: 3,
		stakingToken: tokens.blzd,
		earningToken: tokens.bifi,
		contractAddress: {
			97: '',
			56: '0x95b3389f41dbf513De5710A68220efF5a42dB068'
		},
		poolCategory: PoolCategory.CORE,
		harvest: true,
		tokenPerBlock: '0.00009920',
		sortOrder: 999,
		isFinished: false
	},

	{
		sousId: 4,
		stakingToken: tokens.gya,
		earningToken: tokens.Absol,
		contractAddress: {
			97: '',
			56: '0xE19848e92311E04BE3dE1C451E0c7C597B73Ef58'
		},
		poolCategory: PoolCategory.CORE,
		harvest: true,
		tokenPerBlock: '0.5',
		sortOrder: 999,
		isFinished: false
	}, */
	/*
	{
		sousId: 1,
		stakingToken: tokens.gya,
		earningToken: tokens.magi,
		contractAddress: {
			97: '',
			56: '0x21220651d7ff5D774E06CffE5a8f6b5296882694'
		},
		poolCategory: PoolCategory.CORE,
		harvest: true,
		tokenPerBlock: '95',
		sortOrder: 999,
		isFinished: false
	},
	*/
	{
		sousId: 2,
		stakingToken: tokens.gya,
		earningToken: tokens.cake,
		contractAddress: {
			97: '',
			56: '0xBb8AC99fD90F7640a8A12aD048aC4E867138477E'
		},
		poolCategory: PoolCategory.CORE,
		harvest: true,
		tokenPerBlock: '95',
		sortOrder: 999,
		isFinished: false
	}
]

export default pools
