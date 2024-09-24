export const slideUp = {
	initial: {
		y: '0'
	},
	exit: {
		y: '-100vh',
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
	}
}

export function curve(initPath, targetPath) {
	return {
		initial: {
			d: initPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
		}
	}
}
