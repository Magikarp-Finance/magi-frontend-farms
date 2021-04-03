import React from 'react'
import styled from 'styled-components'
import { Text, Progress } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import { useCurrentTime } from 'hooks/useTimer'
import {
	getLotteryDrawTime,
	getLotteryDrawStep,
	getTicketSaleTime,
	getTicketSaleStep
} from '../helpers/CountdownHelpers'

const ProgressWrapper = styled.div`
	display: block;
	width: 100%;
`

const TopTextWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`

const BottomTextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`

const StyledPrimaryText = styled(Text)`
  margin-right: 16px;
`
const LotteryProgress = () => {
	const TranslateString = useI18n()
	const lotteryHasDrawn = useGetLotteryHasDrawn()
	const currentMillis = useCurrentTime()
	const timeUntilTicketSale = getTicketSaleTime(currentMillis)
	const timeUntilLotteryDraw = getLotteryDrawTime(currentMillis)
	const message1 = "🛠️ We're currently working on the lottery🛠️"
	const message2 = 'Tickets are safe 🔐'
	return (
		<ProgressWrapper>
			<Progress
				primaryStep={getLotteryDrawStep(currentMillis)}
				secondaryStep={getTicketSaleStep()}
				showProgressBunny
			/>
			<TopTextWrapper>
				<StyledPrimaryText fontSize='20px' bold color='contrast'>
					{/* lotteryHasDrawn ? timeUntilTicketSale : timeUntilLotteryDraw */}
					{message1}
				</StyledPrimaryText>
			</TopTextWrapper>

			<BottomTextWrapper>
				<Text color='invertedContrast'>{message2}</Text>
			</BottomTextWrapper>
		</ProgressWrapper>
	)
}

export default LotteryProgress

/*
</TopTextWrapper>
			{lotteryHasDrawn && (
				<BottomTextWrapper>
					<Text color='invertedContrast'>
						{ timeUntilLotteryDraw} {TranslateString(0, 'Until lottery draw') }
						{message2}
					</Text>
				</BottomTextWrapper>
			)}
*/
