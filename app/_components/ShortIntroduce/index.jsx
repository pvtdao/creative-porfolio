import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useLayoutEffect } from 'react'
import ME from '@/app/images/me.jpeg'
import Image from 'next/image'
import styles from './shortIntroduce.module.css'

function ShortIntroduction() {
	const firstText = useRef(null)
	const secondText = useRef(null)
	const thirdText = useRef(null)
	const slider = useRef(null)

	let xPercent = 0
	let direction = -1

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.getElementsByClassName('content')[0],
				scrub: 0.25,
				start: 'top bottom',
				end: 'bottom',
				onUpdate: (e) => (direction = e.direction * -1)
			},
			x: '-500px'
		})
		requestAnimationFrame(animate)
	}, [])

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0
		} else if (xPercent > 0) {
			xPercent = -100
		}

		gsap.set(firstText.current, { xPercent: xPercent })
		gsap.set(secondText.current, { xPercent: xPercent })
		gsap.set(thirdText.current, { xPercent: xPercent })
		requestAnimationFrame(animate)
		xPercent += 0.1 * direction
	}

	return (
		<div className='relative h-[100vh]'>
			<Image
				style={{ objectFit: 'contain', zIndex: 0 }}
				src={ME}
				alt='image'
				fill
			/>

			<div className='absolute top-[calc(100vh-400px)] left-0 right-0'>
				<div ref={slider} className={`${styles.slider}`}>
					<p ref={firstText}>Frontend Developer -</p>
					<p ref={secondText}>Frontend Developer -</p>
					<p ref={thirdText}>Frontend Developer -</p>
				</div>
			</div>
		</div>
	)
}

export default ShortIntroduction
