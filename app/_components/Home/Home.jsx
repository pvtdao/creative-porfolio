import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import MouseScroll from '../icon/MouseScroll'
import Paragraph from '../Paragraph'

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

	const shortDes = `I'm DaoPVT - a Web Developer who loves creating beautiful and user-friendly websites. My goal is to turn creative ideas into meaningful online experiences.`
	return (
		<div className='home-page'>
			<div className='logo-container'>
				<h1 className='w-full text-center font-cosi-times invisible font-[900] p-[1em] text-[10vw] z-[90] logo fixed top-0 left-1/2 -translate-x-1/2 uppercase'>
					DAOPVT
				</h1>
			</div>
			<div className='w-full h-[100vh] bg-background relative'>
				<div className='w-[3vw] absolute bottom-0 left-[50vw] -translate-y-1/2 -translate-x-[50%] '>
					<MouseScroll />
				</div>
			</div>
			<div className='content w-full   h-[100vh] relative'>
				<Paragraph paragraph={shortDes} />
			</div>
		</div>
	)
}

export default HomePage
