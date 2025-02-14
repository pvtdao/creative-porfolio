import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import ShortIntroduction from '../ShortIntroduce'
import AboutMe from '../AboutMe'

function HomePage() {
	useEffect(() => {
		initializeGSAP()
		return cleanupGSAP
	}, [])

	const initializeGSAP = () => {
		gsap.registerPlugin(ScrollTrigger)
		const tl = setupInitialAnimation()
		setupScrollAnimation()
		return tl
	}

	const setupInitialAnimation = () => {
		const tl = gsap.timeline()

		tl.fromTo(
			'.logo',
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

		return tl
	}

	const cleanupGSAP = () => {
		ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
	}

	const setupScrollAnimation = () => {
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
			end: 'top center',
			onUpdate: handleScrollUpdate
		})
	}

	const handleScrollUpdate = (self) => {
		const logo = document.querySelector('.logo')
		if (!logo) return

		if (self.progress === 1) {
			logo.classList.add('glass-effect')
		} else {
			logo.classList.remove('glass-effect')
		}
	}

	return (
		<div className='home-page'>
			<div className='logo-container'>
				<h1 className='w-full text-center font-cosi-times invisible font-[900] p-[1em] text-[10vw] z-[90] logo fixed top-0 left-1/2 -translate-x-1/2 uppercase'>
					DAOPVT
				</h1>
			</div>
			<div className='w-full h-screen bg-background relative'>
				{/* <div className='w-[3vw] absolute bottom-0 left-[50vw] -translate-y-1/2 -translate-x-[50%] '>
					<MouseScroll />
				</div> */}
			</div>
			<div className='content w-full h-screen relative'>
				<ShortIntroduction />
			</div>
			<div className=''>
				<AboutMe />
			</div>
			<div className='h-screen'></div>
		</div>
	)
}

export default HomePage
