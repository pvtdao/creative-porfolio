import { motion, useTransform } from 'framer-motion'
import React from 'react'

function Word({ children, progress, range }) {
	const opacity = useTransform(progress, range, [0, 1])
	return (
		<p className='relative mr-5 mt-3 font-cosi-times font-bold text-[3vw] flex'>
			<span className='absolute opacity-[20%]'>{children}</span>
			<motion.span style={{ opacity, userSelect: 'none' }}>
				{children}
			</motion.span>
		</p>
	)
}

export default Word

// Ref: https://blog.olivierlarose.com/tutorials/text-gradient-scroll-opacity-v2
