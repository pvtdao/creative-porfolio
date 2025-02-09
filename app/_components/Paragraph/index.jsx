import { useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Word from './Word'

function Paragraph({ paragraph }) {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.9', 'start 0.25']
	})

	const words = paragraph.split(' ')

	return (
		<div
			ref={container}
			className='flex content-baseline leading-none p-10 max-w-screen-xl text-black flex-wrap gap-y-[.5vw] gap-x-[.2vw]'
		>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length

				return (
					<Word key={i} progress={scrollYProgress} range={[start, end]}>
						{word}
					</Word>
				)
			})}
		</div>
	)
}

export default Paragraph
