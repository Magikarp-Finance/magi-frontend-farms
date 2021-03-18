import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange Magikarp',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c',
      },
      {
        label: 'Exchange Gyarados',
        href: '#',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
        
      },
      
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
    
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: '#',
      },
  // {
  //    label: 'CoinGecko',
  //    href: 'https://www.coingecko.com/en/coins/goose-finance',
  //  },
  //  {
  //    label: 'CoinMarketCap',
  //    href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //  },
  //  {
  //    label: 'AstroTools',
  //    href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //  },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
     {
        label: 'Github',
        href: 'https://github.com/goosedefi/',
        
      },
      {
        label: 'Docs',
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      },
      {
        label: 'Blog',
        href: 'https://goosefinance.medium.com/',
      },
    ],
  }, 
  // {
  //  label: 'Partnerships/IFO',
  //  icon: 'GooseIcon',
  //  href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    label: 'Audit by Techrate (MAGI)',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK (GYARADOS)',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
]

export default config
