import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import MouseScroll from '../icon/MouseScroll'
import Paragraph from '../Paragraph'
import Hero from '../Hero'
import Image from 'next/image'
import ME from '@/app/images/4.jpg'

function HomePage() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline()

		tl.fromTo(
			'.logo',
			1,
			{
				y: '100vh',
				visibility: 'hidden',
				ease: 'power4.out',
				delay: 1.5,
				duration: 0.5
			},
			{
				y: '50vh',
				visibility: 'visible'
			}
		)

		ScrollTrigger.create({
			animation: gsap.fromTo(
				'.logo',
				{
					y: '50vh',
					fontSize: '10vw',
					yPercent: -50
				},
				{
					y: '0vh',
					fontSize: '2vw',
					// backdropFilter: 'blur(1rem)',
					yPercent: 0
				}
			),
			scrub: true,
			trigger: '.content',
			start: 'top bottom',
			end: 'top center'
		})

		return () => {
			tl.kill()
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	const longDes = `I am passionate about takes pride in creating beautiful, functional, and user-friendly websites. I enjoy bringing creative ideas to life and strive to deliver meaningful online experiences that resonate with users.`
	return (
		<div className='home-page'>
			<div className='logo-container'>
				<h1 className='w-full text-center font-cosi-times invisible font-[900] p-[1em] text-[10vw] z-[90] logo fixed top-0 left-1/2 -translate-x-1/2 uppercase'>
					DAOPVT
				</h1>
			</div>
			<div className='w-full h-[100vh] bg-background relative'>
				{/* <div className='w-[3vw] absolute bottom-0 left-[50vw] -translate-y-1/2 -translate-x-[50%] '>
					<MouseScroll />
				</div> */}
			</div>
			<div className='content w-full h-[100vh] relative'>
				<div className='relative h-[100vh]'>
					<Image style={{ objectFit: 'cover' }} src={ME} alt='image' fill />
					<Hero />
				</div>
			</div>
		</div>
	)
}

export default HomePage
