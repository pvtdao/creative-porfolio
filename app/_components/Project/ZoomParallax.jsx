import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'
import Picture1 from '@/app/images/projects/1.jpeg'
import Picture2 from '@/app/images/projects/2.jpeg'
import Picture3 from '@/app/images/projects/3.jpg'
import Picture4 from '@/app/images/projects/4.jpg'
import Picture5 from '@/app/images/projects/5.jpg'
import Picture6 from '@/app/images/projects/6.jpg'
import Picture7 from '@/app/images/projects/7.jpeg'
import Image from 'next/image'
import styles from './zoom-parallax.module.css'

function ZoomParallax() {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	})

	const scaleObject = {
		4: useTransform(scrollYProgress, [0, 1], [1, 4]),
		5: useTransform(scrollYProgress, [0, 1], [1, 5]),
		6: useTransform(scrollYProgress, [0, 1], [1, 6]),
		8: useTransform(scrollYProgress, [0, 1], [1, 8]),
		9: useTransform(scrollYProgress, [0, 1], [1, 9])
	}

	const pictures = [
		{
			src: Picture1,
			scale: scaleObject[4]
		},
		{
			src: Picture2,
			scale: scaleObject[5]
		},
		{
			src: Picture3,
			scale: scaleObject[6]
		},
		{
			src: Picture4,
			scale: scaleObject[5]
		},
		{
			src: Picture5,
			scale: scaleObject[6]
		},
		{
			src: Picture6,
			scale: scaleObject[8]
		},
		{
			src: Picture7,
			scale: scaleObject[9]
		}
	]

	return (
		<div ref={container} className='h-[200vh] relative'>
			<div className='sticky overflow-hidden top-0 h-screen'>
				{pictures.map(({ src, scale }, index) => {
					return (
						<motion.div key={index} style={{ scale }} className={styles.el}>
							<div className={styles.imageContainer}>
								<Image src={src} fill alt='image' placeholder='blur' />
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}

export default ZoomParallax
