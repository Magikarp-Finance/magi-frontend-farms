import React, { useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading } from '@pancakeswap-libs/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
// import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'
import TimerProgress from '../Home/components/TimerProgress'




const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const pools = usePools(account)
  const { blockNumber } = useBlock()

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || blockNumber > pool.endBlock),
    [blockNumber, pools],
  )
  const Arrowa='->'

  return (
    <Page>
      <Hero>
        <div>
          <Heading   >
            {TranslateString(999, '⛩️ GYA SHRINE')}
          </Heading>
          <ul>

            <li>Stake GYA to earn BNB</li>
            <li>Sacrifice GYA 🔥 burns a dynamic % of the stacked GYA tokens</li>
            <li> (check Stages below)</li>
            <li>Rewards are calculated per block.</li>
            <li><strong>Harvest button will be enable once the timer reaches 0</strong></li>
          </ul>
        </div>
        <div style={{ textAlign: 'right' }}>
        <TimerProgress />
            {/* <img src="/images/blzdstakepage.png" alt="GYA Pool icon" /> */}
        </div>
      </Hero>
      <PoolTabButtons />
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            {/* <Coming /> */}
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
      <br/>
      <br/>
      <br/> 
       <Heading   >
        STAGES
     </Heading>
     
      <br/>
      <ul style={{color:'#d37a40',margin:'auto'}}>
          <li style={{marginTop:"12px"}}><span style={{display:'inline-block',width:'16px',height:'16px',background:'#78b159',borderRadius:'4px'}} /> Stage 1: From 0 to 5000 GYA {Arrowa} 🔥 Burn Fee will be set to <b>50%</b></li>
            <li  style={{marginTop:"12px"}}><span style={{display:'inline-block',width:'16px',height:'16px',background:'#fdcb58',borderRadius:'4px'}} /> Stage 2: From 5000 to 10.000 GYA {Arrowa} 🔥 Burn Fee will be reduced to <b>40%</b></li>
            <li  style={{marginTop:"12px"}}><span style={{display:'inline-block',width:'16px',height:'16px',background:'#f4900c',borderRadius:'4px'}} /> Stage 3: From 10.000 to 20.000 GYA {Arrowa} 🔥 Burn Fee reduced to <b>35%</b></li>
            <li  style={{marginTop:"12px"}}><span style={{display:'inline-block',width:'16px',height:'16px',background:'#c1694f',borderRadius:'4px'}} /> Stage 4: From 20.000 to 40.000 GYA {Arrowa} 🔥 Burn Fee reduced to <b>30%</b></li>
            <li  style={{marginTop:"12px"}}><span style={{display:'inline-block',width:'16px',height:'16px',background:'#dd2e44',borderRadius:'4px'}} /> Final Stage: 40.000+++ {Arrowa} 🔥 Burn Fee reduced to <b> 20%</b></li>
            </ul>
    </Page>
  )
}


const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 396px;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
