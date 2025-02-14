import React from 'react'
import Paragraph from '../Paragraph'
import RoundedButton from '@/app/_common/RoundedButton'

function AboutMe() {
	const shortDes =
		'I’m Dao Phan, a Web Developer passionate about creating visually stunning and user-friendly websites. I specialize in transforming creative ideas into meaningful digital experiences that captivate users and bring their visions to life.'
	return (
		<>
			<div className='pt-[15vh] flex gap-[5vh] flex-col relative'>
				<div className=''>
					<Paragraph paragraph={shortDes} />
				</div>

				<div data-scroll data-scroll-speed={0.3}>
					<RoundedButton className='top-0 left-[80%] w-[10vw] h-[10vw] bg-[#1c1d20] text-white rounded-full absolute flex items-center justify-center justify-self-end cursor-pointer'>
						About me
					</RoundedButton>
				</div>
			</div>
		</>
	)
}

export default AboutMe
