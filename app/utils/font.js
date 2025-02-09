import localFont from 'next/font/local'

export const CosiTimes = localFont({
	src: [
		{
			path: '../fonts/CosiTimes-Bold.woff2',
			weight: '800',
			style: 'normal'
		},
		{
			path: '../fonts/CosiTimes-Light.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../fonts/CosiTimes-Roman.woff2',
			weight: '600',
			style: 'normal'
		}
	],
	variable: '--font-cosi-times'
})

export const Iskry = localFont({
	src: '../fonts/Iskry Regular.ttf',
	variable: '--font-iskry',
	weight: '100 400 500 700 800 900'
})

export const RepublicaMinor = localFont({
	src: '../fonts/Republica Minor 2.0.otf',
	variable: '--font-republica-minor',
	weight: '900'
})
