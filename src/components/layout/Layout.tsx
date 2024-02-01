import { useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Golos_Text, Open_Sans } from 'next/font/google'
import { FC, PropsWithChildren, useState } from 'react'
import { AuthModal } from '../ui/auth-modal/AuthModal'
import { Footer } from './footer/Footer'
import { LocationModal } from '../ui/location-modal/LocationModal'

const golos = Golos_Text({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin', 'cyrillic'],
	variable: '--golos',
})

const sans = Open_Sans({
	weight: ['300', '400'],
	subsets: ['latin'],
	style: ['italic'],
	variable: '--sans',
})

const DynamicHeader = dynamic(() => import('./header/Header'), { ssr: false })

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	// const [openAuth, setOpenAuth] = useState<boolean>(false)

	return (
		<>
			{/* <Head>
				<title>Detal Express</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head> */}
			<div className={`${golos.variable} ${sans.variable} body`}>
				<DynamicHeader />
				<main>{children}</main>
				<Footer />
				<AuthModal />
				<LocationModal />
			</div>
		</>
	)
}
