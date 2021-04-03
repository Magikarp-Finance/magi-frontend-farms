import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

const Nfts: Nft[] = [
	{
		name: 'Lucky Star',
		description: "If we ain't out of here in ten minutes, we won't need no rocket to fly through space!",
		originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
		previewImage: 'MagiAlien.png',
		blurImage: 'MagiAlien.png',
		sortOrder: 999,
		bunnyId: 0,
		collection: 'Deep Space',
		pathCollection: 'SpaceMagi'
	},
	{
		name: 'Flying to the Moon',
		description: 'Gravity proves that the whole universe is filled with Love.',
		originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
		previewImage: 'MagiGravity.png',
		blurImage: 'MagiGravity.png',
		sortOrder: 999,
		bunnyId: 1,
		collection: 'Deep Space',
		pathCollection: 'SpaceMagi'
	},
	{
		name: 'Red Planet',
		description: "Hi, I'm Magikarp and I'm still alive... obviously",
		originalImage:
			'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
		previewImage: 'MagiMartian.png',
		blurImage: 'MagiMartian.png',
		sortOrder: 999,
		bunnyId: 2,
		collection: 'Deep Space',
		pathCollection: 'SpaceMagi'
	},
	{
		name: 'A Magikarp odyssey',
		description:
			'Someday, the children of the new sun will meet the children of the old. I think they will be our friends.',
		originalImage:
			'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
		previewImage: 'Magi2010.png',
		blurImage: 'Magi2010.png',
		sortOrder: 999,
		bunnyId: 2,
		collection: 'Deep Space',
		pathCollection: 'SpaceMagi'
	}
]

export default Nfts
