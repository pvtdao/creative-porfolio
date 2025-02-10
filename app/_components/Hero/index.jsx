'use client'
import Picture1 from '@/app/images/4.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Hero() {
	const container = useRef()

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start']
	})

	return (
		<main className='overflow-hidden'>
			<div ref={container}>
				<Slide
					src={Picture1}
					direction={'right'}
					left={'-10%'}
					progress={scrollYProgress}
				/>
			</div>
			<div className='h-[100vh]' />
		</main>
	)
}

export default Hero

const Slide = (props) => {
	const direction = props.direction == 'left' ? -1 : 1
	const translateX = useTransform(
		props.progress,
		[0, 1],
		[150 * direction, -150 * direction]
	)
	return (
		<motion.div
			style={{ x: translateX, left: props.left }}
			className='relative flex whitespace-nowrap'
		>
			<Phrase src={props.src} text={'Web Developer'} />
			<Phrase src={props.src} text={'3 YOE'} />
			<Phrase src={props.src} text={'Web Developer'} />
			<Phrase src={props.src} text={'3 YOE'} />
		</motion.div>
	)
}

const Phrase = ({ src, text }) => {
	return (
		<div className={'px-5 flex gap-5 items-center'}>
			<p className='text-[4vw] mx-[1vw]'>{text}</p>
			<div className='relative h-[4vw] aspect-[4/2] rounded-full overflow-hidden bg-black flex items-center justify-center'>
				<div className='bg-white h-[3.5vw] aspect-[5/2.36] rounded-full'></div>
			</div>
		</div>
	)
}
