import './globals.css'
import { Iskry, RepublicaMinor, CosiTimes } from './utils/font'

export const metadata = {
	title: 'DaoPVT • Web Developer',
	description:
		'As a passionate frontend developer with over 2 years of experience. Explore my portfolio to see projects that reflect my skills in building modern, user-friendly interfaces and scalable solutions.'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${RepublicaMinor.variable} ${Iskry.variable} ${CosiTimes.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
