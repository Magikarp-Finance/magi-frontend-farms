import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, Progress } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useCurrentTime } from 'hooks/useTimer'

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
const TimerProgress = () => {
	const [ Timers, setTimers ] = useState({ ProgressPercent: 0, diffText: '' })
	useEffect(() => {
		const interval = setInterval(() => {
			const offset = new Date().getTimezoneOffset()
			const currentMillis = new Date().getTime() + offset * 60000
			const iniDate = new Date('03/28/2021 23:00:00')
			const endDate = new Date('03/29/2021 15:00:00')
			const iniDateMillis = iniDate.getTime()
			const endDateMillis = endDate.getTime()
			const ProgressPer = 1 - (endDateMillis - currentMillis) / (endDateMillis - iniDateMillis)
			const diff = timeDiffCalc(endDate.getTime(), currentMillis)
			setTimers({ ProgressPercent: ProgressPer, diffText: diff })
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<ProgressWrapper>
			<Progress primaryStep={100} />
			<TopTextWrapper>
				<StyledPrimaryText fontSize='20px' bold color='contrast'>
					We are in proccess of deploy Farms.
					{/* Timers.diffText} */}
				</StyledPrimaryText>
				<Text fontSize='20px' bold color='invertedContrast' />
			</TopTextWrapper>
			<BottomTextWrapper>
				<StyledPrimaryText fontSize='15px' color='contrast'>
					This banner will dissapear once farms are deployed.
				</StyledPrimaryText>
			</BottomTextWrapper>
		</ProgressWrapper>
	)
}

export default TimerProgress

function timeDiffCalc (dateFuture, dateNow) {
	let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000

	// calculate days
	const days = Math.floor(diffInMilliSeconds / 86400)
	diffInMilliSeconds -= days * 86400

	// calculate hours
	const hours = Math.floor(diffInMilliSeconds / 3600) % 24
	diffInMilliSeconds -= hours * 3600

	// calculate minutes
	const minutes = Math.floor(diffInMilliSeconds / 60) % 60
	diffInMilliSeconds -= minutes * 60

	const seconds = Math.floor(diffInMilliSeconds)

	let difference = ''
	if (days > 0) {
		difference += days === 1 ? `${days} day, ` : `${days} days, `
	}

	difference += hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `

	difference += minutes === 0 || hours === 1 ? `${minutes} minutes` : `${minutes} minutes`
	difference += `, ${seconds} seconds`

	return difference
}
