import cssLogo from '@/app/images/logo/css.svg'
import expressLogo from '@/app/images/logo/express.svg'
import htmlLogo from '@/app/images/logo/html.svg'
import jsLogo from '@/app/images/logo/js.svg'
import nextLogo from '@/app/images/logo/next.svg'
import nodeJsLogo from '@/app/images/logo/nodejs.svg'
import nuxtLogo from '@/app/images/logo/nuxt.svg'
import reactJsLogo from '@/app/images/logo/reactjs.svg'
import scssLogo from '@/app/images/logo/scss.svg'
import tailwindLogo from '@/app/images/logo/tailwind.svg'
import vueLogo from '@/app/images/logo/vue.svg'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'
import styles from './skills.module.css'

function Skill() {
	const plane1 = useRef(null)
	const plane2 = useRef(null)
	const plane3 = useRef(null)
	let requestAnimationFrameId = null
	let xForce = 0
	let yForce = 0
	const easing = 0.08
	const speed = 0.008

	const manageMouseMove = (e) => {
		const { movementX, movementY } = e
		xForce += movementX * speed
		yForce += movementY * speed

		if (requestAnimationFrameId == null) {
			requestAnimationFrameId = requestAnimationFrame(animate)
		}
	}

	const lerp = (start, target, amount) => start * (1 - amount) + target * amount

	const animate = () => {
		xForce = lerp(xForce, 0, easing)
		yForce = lerp(yForce, 0, easing)
		gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })
		gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
		gsap.set(plane3.current, {
			x: `+=${xForce * 0.25}`,
			y: `+=${yForce * 0.25}`
		})

		if (Math.abs(xForce) < 0.01) xForce = 0
		if (Math.abs(yForce) < 0.01) yForce = 0

		if (xForce != 0 || yForce != 0) {
			requestAnimationFrame(animate)
		} else {
			cancelAnimationFrame(requestAnimationFrameId)
			requestAnimationFrameId = null
		}
	}

	return (
		<main
			onMouseMove={(e) => {
				manageMouseMove(e)
			}}
			className={styles.main}
		>
			<div ref={plane1} className={styles.plane}>
				<Image
					src={cssLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={0.05}
				/>
				<Image
					src={nextLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={-0.05}
				/>
				<Image
					src={vueLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={0.05}
				/>
				<Image
					src={tailwindLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={-0.05}
				/>
			</div>
			<div ref={plane2} className={styles.plane}>
				<Image
					src={nodeJsLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={0.05}
				/>
				<Image
					src={expressLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={0.05}
				/>
				<Image
					src={jsLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={-0.05}
				/>
				<Image
					src={scssLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={0.05}
				/>
			</div>
			<div ref={plane3} className={styles.plane}>
				<Image
					src={htmlLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={-0.05}
				/>
				<Image
					src={nuxtLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={0.05}
				/>
				<Image
					src={reactJsLogo}
					alt='image'
					width={200}
					data-scroll
					data-scroll-speed={-0.05}
				/>
			</div>
			<div
				className={`${styles.title} text-black text-[4vw] mix-blend-difference font-iskry uppercase`}
			>
				<h1 className='font-bold'>MY SKILLS TO MAKE THE WORKS</h1>
			</div>
		</main>
	)
}

export default Skill
