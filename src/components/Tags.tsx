import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'

const NoFeeTag = () => (
	<Tag variant='success' outline startIcon={<VerifiedIcon />}>
		No Fees
	</Tag>
)

const RiskTag = ({ risk }) => (
	<Tag variant={risk >= 3 ? 'failure' : 'success'} outline startIcon={<VerifiedIcon />}>
		Risk {risk}
	</Tag>
)

const CoreTag = () => (
	<Tag variant='secondary' outline startIcon={<VerifiedIcon />}>
		finished
	</Tag>
)
const CommunityTag = () => (
	<Tag variant='textSubtle' outline startIcon={<CommunityIcon />}>
		LP
	</Tag>
)

const BinanceTag = () => (
	<Tag variant='binance' outline startIcon={<BinanceIcon />}>
		Shrine
	</Tag>
)

export { CoreTag, CommunityTag, BinanceTag, RiskTag, NoFeeTag }
