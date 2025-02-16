import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './skills.css'
function Skill() {
	useEffect(() => {
		initializeSkillsAnimation()
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	const initializeSkillsAnimation = () => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.ticker.lagSmoothing(0)

		const cardPositions = [
			{ top: '30%', left: '55%' },
			{ top: '20%', left: '25%' },
			{ top: '50%', left: '10%' },
			{ top: '60%', left: '40%' },
			{ top: '30%', left: '30%' },
			{ top: '60%', left: '60%' },
			{ top: '20%', left: '50%' },
			{ top: '60%', left: '10%' },
			{ top: '20%', left: '40%' },
			{ top: '45%', left: '55%' }
		]

		// Create and setup cards
		const imagesContainer = document.querySelector('.images')
		if (imagesContainer) {
			for (let i = 0; i <= 10; i++) {
				const card = document.createElement('div')
				card.className = `card card-${i}`

				const img = document.createElement('img')
				img.src = `https://picsum.photos/200/300?random=${i}`
				card.appendChild(img)

				const position = cardPositions[i - 1]
				if (position) {
					card.style.top = position.top
					card.style.left = position.left
				}

				imagesContainer.appendChild(card)
			}
		}

		// Initialize card animations
		const cards = document.querySelectorAll('.card')
		cards.forEach((card) => {
			gsap.set(card, {
				z: -50000,
				scale: 0
			})
		})

		// Setup scroll trigger animation
		const titlesContainer = document.querySelector('.titles')
		const moveDistance = window.innerWidth * 3

		ScrollTrigger.create({
			trigger: '.sticky',
			start: 'top top',
			end: `+=${window.innerHeight * 5}px`,
			pin: true,
			scrub: 1,
			onUpdate: (self) => {
				const xPosition = -moveDistance * self.progress
				if (titlesContainer) {
					gsap.set(titlesContainer, {
						x: xPosition
					})
				}

				const velocity = self.velocity
				const normalizedVelocity = velocity / Math.abs(velocity) || 0
				const maxOffset = 30
				const currentSpeed = Math.min(Math.abs(velocity / 500), maxOffset)
				const isAtEdge = self.progress <= 0 || self.progress >= 1

				document.querySelectorAll('.title').forEach((titlesContainer) => {
					const title1 = titlesContainer.querySelector('.title-1')
					const title2 = titlesContainer.querySelector('.title-2')
					const title3 = titlesContainer.querySelector('.title-3')

					if (isAtEdge) {
						gsap.to([title1, title2], {
							xPercent: -50,
							x: 0,
							duration: 0.5,
							ease: 'power2.out',
							overwrite: true
						})
					} else {
						const baseOffset = normalizedVelocity * currentSpeed

						gsap.to(title1, {
							xPercent: -50,
							x: `${baseOffset * 4}px`,
							duration: 0.2,
							ease: 'power1.out',
							overwrite: 'auto'
						})

						gsap.to(title2, {
							xPercent: -50,
							x: `${baseOffset * 2}px`,
							duration: 0.2,
							ease: 'power1.out',
							overwrite: 'auto'
						})
					}

					gsap.set(title3, {
						xPercent: -50,
						x: 0
					})
				})

				cards.forEach((card, index) => {
					const staggerOffset = index * 0.075
					const scaledProgress = (self.progress - staggerOffset) * 3
					const individualProgess = Math.max(0, Math.min(1, scaledProgress))

					const targetZ = index === cards.length - 1 ? 1500 : 2000
					const newZ = -50000 + (targetZ + 50000) * individualProgess
					const scaleProgress = Math.min(1, individualProgess * 10)
					const scale = Math.max(0, Math.min(1, scaleProgress))

					gsap.set(card, {
						z: newZ,
						scale: scale
					})
				})
			}
		})
	}

	return (
		<section className={`sticky w-screen h-screen overflow-hidden`}>
			<div className='titles'>
				<div className='title'>
					<h1 className='title-1'>Javascript</h1>
					<h1 className='title-2'>Javascript</h1>
					<h1 className='title-3'>Javascript</h1>
				</div>
				<div className='title'>
					<h1 className='title-1'>ReactJs</h1>
					<h1 className='title-2'>ReactJs</h1>
					<h1 className='title-3'>ReactJs</h1>
				</div>
				<div className='title'>
					<h1 className='title-1'>VueJs</h1>
					<h1 className='title-2'>VueJs</h1>
					<h1 className='title-3'>VueJs</h1>
				</div>
				<div className='title'>
					<h1 className='title-1'>NodeJs</h1>
					<h1 className='title-2'>NodeJs</h1>
					<h1 className='title-3'>NodeJs</h1>
				</div>
			</div>
			<div className='images'></div>
		</section>
	)
}

export default Skill
