import React from 'react'
import Paragraph from '../Paragraph'

function AboutMe() {
	const longDes = `I am passionate about takes pride in creating beautiful, functional, and user-friendly websites. I enjoy bringing creative ideas to life and strive to deliver meaningful online experiences that resonate with users.`
	const shortDes =
		"I'm Dao Phan, a Web Developer who loves crafting visually appealing and intuitive websites. My goal is to transform creative ideas into meaningful digital experiences that captivate and engage users."
	return (
		<>
			<div className='pt-[10vh] flex gap-[5vh] flex-col'>
				<div className=''>
					<Paragraph paragraph={shortDes} />
				</div>

				<div>
					<Paragraph paragraph={longDes} />
				</div>
			</div>
		</>
	)
}

export default AboutMe
