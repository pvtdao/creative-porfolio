import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from './anim'
import gsap from 'gsap'
import useDimenstionWindow from '@/app/_hooks/useDimensionWindow'

const counterStyle = {
	clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
}

function Preloading({ setLoading }) {
	const { width, height } = useDimenstionWindow()
	const [counter, setCounter] = useState(0)
	const [isShowCurve, setIsShowCurve] = useState(false)

	const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
		height + 300
	} 0 ${height}  L0 0`
	const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
		width / 2
	} ${height} 0 ${height}  L0 0`

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
		}
	}

	useEffect(() => {
		function animateCounter() {
			const updateInterval = 300
			const maxDuration = 2000

			const endValue = 100
			const startTime = Date.now()

			function updateCounter() {
				const elapsedTime = Date.now() - startTime

				if (elapsedTime < maxDuration) {
					setCounter((prevCounter) => {
						const newValue = Math.min(
							prevCounter + Math.floor(Math.random() * 10) + 5,
							endValue
						)

						return newValue
					})

					setTimeout(updateCounter, updateInterval)
				} else {
					setCounter(endValue)

					gsap.to('.counter p', {
						y: `-4rem`,
						duration: 1,
						ease: 'power3.in',
						delay: 0.4,
						onComplete: curveAndHide
					})
				}
			}
			updateCounter()
		}

		gsap.to('.counter p', {
			y: 0,
			duration: 1,
			ease: 'power3.out',
			delay: 0.8,
			onComplete: animateCounter
		})
	}, [])

	function curveAndHide() {
		setIsShowCurve(true)
		setTimeout(() => {
			setLoading(false)
			window.scrollTo(0, 0)
		}, 100)
	}

	return (
		<motion.div
			variants={slideUp}
			initial='initial'
			exit='exit'
			className='h-screen w-[100vw] flex items-center justify-center fixed z-[99] bg-foreground text-white'
		>
			<div
				className='counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center'
				style={counterStyle}
			>
				<p
					className={`font-cosi-times text-[2vw] text-white relative block translate-y-[4rem]`}
				>
					{counter}
				</p>
			</div>
			{isShowCurve && width > 0 && counter === 100 && (
				<>
					<svg className='absolute top-0 w-full h-[calc(100%+300px)]'>
						<motion.path
							className='fill-foreground'
							variants={curve}
							initial='initial'
							exit='exit'
						></motion.path>
					</svg>
				</>
			)}
		</motion.div>
	)
}

export default Preloading
