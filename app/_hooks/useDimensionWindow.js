import { useState, useEffect } from 'react'

function debounce(fn, ms) {
	let timer
	return (_) => {
		clearTimeout(timer)
		timer = setTimeout((_) => {
			timer = null
			fn()
		}, ms)
	}
}

export default function useDimenstionWindow() {
	const [dimensions, setDimensions] = useState({
		width: globalThis?.window?.innerWidth,
		height: globalThis?.window?.innerHeight
	})

	const handleResize = () => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}

	useEffect(() => {
		const debounceHandleResize = debounce(handleResize, 1000)
		window.addEventListener('resize', debounceHandleResize)

		return () => {
			window.removeEventListener('resize', debounceHandleResize)
		}
	}, [])

	return dimensions
}
