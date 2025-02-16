import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Magnetic from '../Magnetic'

export default function RoundedButton({
	children,
	backgroundColor = '#455CE9',
	...attributes
}) {
	const circle = useRef(null)
	let timeline = useRef(null)
	let timeoutId = null
	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true })
		timeline.current
			.to(
				circle.current,
				{ top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
				'enter'
			)
			.to(
				circle.current,
				{ top: '-150%', width: '125%', duration: 0.25 },
				'exit'
			)
	}, [])

	const manageMouseEnter = () => {
		if (timeoutId) clearTimeout(timeoutId)
		timeline.current.tweenFromTo('enter', 'exit')
	}

	const manageMouseLeave = () => {
		timeoutId = setTimeout(() => {
			timeline.current.play()
		}, 300)
	}

	return (
		<Magnetic>
			<div
				className='rounded-[3em] border border-gray-500  relative flex items-center justify-center py-[15px] px-[60px]'
				style={{ overflow: 'hidden' }}
				// onMouseEnter={() => {
				// 	manageMouseEnter()
				// }}
				// onMouseLeave={() => {
				// 	manageMouseLeave()
				// }}
				{...attributes}
			>
				<p className='relative z-10 transition-colors duration-400 hover:text-white m-0 text-[1.3vw] font-medium font-iskry'>
					{children}
				</p>
				<div
					ref={circle}
					style={{ backgroundColor }}
					className='w-full h-[150%] absolute top-full rounded-full'
				></div>
			</div>
		</Magnetic>
	)
}
