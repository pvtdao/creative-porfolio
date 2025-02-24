import React from 'react'
import Paragraph from '../Paragraph'
import RoundedButton from '@/app/_common/RoundedButton'

function AboutMe() {
	const shortDes =
		"I'm Dao Phan, a Frontend Developer based in Vietnam, passionate about crafting visually appealing and user-friendly websites. With over three years of experience, I turn creative ideas into impactful digital experiences."
	return (
		<div className='h-full w-full relative pb-[40vh]'>
			<div className='pt-[15vh] flex gap-[5vh] flex-col relative'>
				<div className=''>
					<Paragraph paragraph={shortDes} />
				</div>

				<div
					data-scroll
					data-scroll-speed={0.2}
					className='top-3/4 left-[80%] absolute'
				>
					<RoundedButton className=' bg-[#1c1d20] w-[10vw] h-[10vw] text-white rounded-full absolute flex items-center justify-center justify-self-end'>
						About me
					</RoundedButton>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
