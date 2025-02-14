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

export const BraveParidos = localFont({
	src: '../fonts/MJ-BraveParidos-Regular.ttf',
	variable: '--font-mj-brave-paridos',
	weight: '100 400 500 700 800 900'
})

export const Amerigraf = localFont({
	src: '../fonts/UTM-Amerigraf.ttf',
	variable: '--font-amerigraf',
	weight: '100 400 500 700 800 900'
})

export const Gilmore = localFont({
	src: '../fonts/UTM-Gilmore.ttf',
	variable: '--font-gilmore',
	weight: '100 400 500 700 800 900'
})

export const Avgard = localFont({
	src: [
		{
			path: '../fonts/Avgard.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../fonts/AvgardItalic.ttf',
			weight: '600',
			style: 'normal'
		},
		{
			path: '../fonts/AvgardBold.ttf',
			weight: '800',
			style: 'normal'
		}
	],
	variable: '--font-avgard'
})

export const EssendineCaps = localFont({
	src: [
		{
			path: '../fonts/UTM Essendine Caps.ttf',
			weight: '400',
			style: 'normal'
		}
		// {
		// 	path: '../fonts/UTM Essendine CapsBold.ttf',
		// 	weight: '600',
		// 	style: 'normal'
		// }
	],
	variable: '--font-essendine-caps'
})
