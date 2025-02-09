'use client'
import { useEffect, useState } from 'react'
import Preloading from './_components/Preloading'
import { AnimatePresence } from 'framer-motion'
import HomePage from './_components/Home/Home'

export default function Home() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default
			const locomotiveScroll = new LocomotiveScroll()
		})()
	}, [])
	return (
		<main>
			<AnimatePresence mode='wait'>
				{loading && <Preloading setLoading={setLoading} />}
			</AnimatePresence>
			{!loading && <HomePage />}
		</main>
	)
}
