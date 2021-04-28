import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, usePriceMagiBusd } from 'state/hooks'

import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'

// Added feature to filter disabled Menus
const Menu = (props) => {
	const { account, connect, reset } = useWallet()
	const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
	const { isDark, toggleTheme } = useTheme()
	const cakePriceUsd = usePriceCakeBusd()
	const magiPriceUsd = usePriceMagiBusd()

	return (
		<UikitMenu
			account={account}
			login={connect}
			logout={reset}
			isDark={isDark}
			toggleTheme={toggleTheme}
			currentLang={selectedLanguage && selectedLanguage.code}
			langs={allLanguages}
			setLang={setSelectedLanguage}
			cakePriceUsd={cakePriceUsd.toNumber()}
			tokenAltPriceUsd={magiPriceUsd.toNumber()}
			links={config}
			priceLink='https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x9458784486fb00c2d1a8740d5579207c42dbd602'
			tokenAltpriceLink='https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c'
			{...props}
		/>
	)
}

export default Menu
