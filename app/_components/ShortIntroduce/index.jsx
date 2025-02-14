import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useLayoutEffect } from 'react'
import ME from '@/app/images/Ta Dung - me.png'
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
		<div className='relative h-screen overflow-hidden bg-black/80'>
			<Image
				style={{ objectFit: 'contain', zIndex: 0 }}
				src={ME}
				alt='image'
				fill
			/>

			<div className='absolute bottom-0 left-0 right-0'>
				<div ref={slider} className={`${styles.slider}`}>
					<p ref={firstText}>Frontend Developer -</p>
					<p ref={secondText}>Frontend Developer -</p>
					<p ref={thirdText}>Frontend Developer -</p>
				</div>
			</div>

			<div data-scroll data-scroll-speed={0.1} className={styles.description}>
				<svg
					width='9'
					height='9'
					viewBox='0 0 9 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
						fill='white'
					/>
				</svg>
				<div className='font-iskry font-bold flex flex-col flex-start'>
					<p>Người Việt Nam</p>
					<p>Vietnamese</p>
				</div>
			</div>
		</div>
	)
}

export default ShortIntroduction
