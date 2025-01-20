"use client";

import { motion } from 'framer-motion'

import { upward } from '../../variants/upward'
import { leftward } from '../../variants/leftward'
import { transition1 } from '../../transitions/transition1'
import { transition1_s } from '../../transitions/transition1_s'
import { transition1_d } from '../../transitions/transition1_d'

import { useEffect } from 'react'

export default function Projects() {
	useEffect(() => {
		document.querySelectorAll('.tab')[1]?.classList.add('active_tab');
		document.querySelectorAll('.mtab')[1]?.classList.add('active_tab');
	})

    return (
		<motion.section transition={transition1_s}>
			<div className="container mx-auto flex flex-col items-center gap-y-[8rem] px-4">
				{/* title  */}
				<div className="flex flex-col text-center mt-20 gap-y-12">
					{/* hero lines  */}
					<div className='flex flex-col items-center'>
						<div className="flex flex-row items-center gap-x-4 md:gap-x-8">
							<motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" transition={transition1} viewport={{once: true}} className="h1">Mes</motion.h1>
							<div className="flex flex-row justify-center items-center w-[8rem] md:w-[12rem] h-[4rem] relative">
								<img src="/mask.webp" alt="" />
								<motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" transition={transition1} viewport={{once: true}}  className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
							</div>
						</div>
						<motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" transition={transition1_d} viewport={{once: true}}  className="h1">Projets</motion.h1>
					</div>
					{/* text  */}
					<motion.div variants={upward} initial="variantInit" whileInView="variantAnim" transition={transition1_d} viewport={{once: true}} >
						<p className='p large'>Cras volutpat, libero et euismod semper, neque orci rhoncus magna, eu venenatis tortor nibh at purus. Vivamus sit amet commodo tortor.</p>
					</motion.div>
				</div>

				{/* projects  */}
				<motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='w-full max-w-[75rem] flex flex-col justify-center'>
					<div className='border-b-2 border-b-[--grey-medium]'>
						<a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
							<div>Website Design & Development for GMW Construct</div>
							<div className='project_image_container'>
								<img src="projects/gmwconstruct.png" alt="" />
							</div>
							<div className='project'></div>
						</a>
					</div>
					
					<div className='border-b-2 border-b-[--grey-medium]'>
						<a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
							<div>Web Design & Development for Hygor Fonseca (Photographer)</div>
							<div className='project_image_container'>
								<img src="projects/hygorfonseca.png" alt="" />
							</div>
							<div className='project'></div>
						</a>
					</div>

					<div className='border-b-2 border-b-[--grey-medium]'>
						<a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
							<div>Web Design & Development for Renato Fernandes (Photographer)</div>
							<div className='project_image_container'>
								<img src="projects/renatofernandes.png" alt="" />
							</div>
							<div className='project'></div>
						</a>
					</div>

					<div className='border-b-2 border-b-[--grey-medium]'>
						<a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
							<div>Votre entreprise pourrait être ici</div>
							<div className='project_image_container'>
								<img src="projects/placeholder.png" className='object-cover flex' alt="" />
							</div>
							<div className='project'></div>
						</a>
					</div>
				</motion.div>
			</div>

			{/* Lets work together  */}
			<div className='flex flex-col items-center relative mt-[10rem]'>
				<div className='flex flex-col items-center gap-y-6 md:gap-y-16 w-full bg-cover bg-[url("/facade.webp")]'>
					<div className='mt-6 md:mt-10 bg-[rgba(30,30,30,0.6)] w-full max-w-[22rem] md:max-w-[70rem] rounded-[2.5rem]'>
						<div className='flex flex-col items-center py-[2rem] md:py-[3rem] px-[0.5rem] gap-y-6'>
							<h2 className='h2 text-[1.7rem] text-center'>Vamos trabalhar juntos</h2>
							<p className='p text-[1rem] md:text-[1.5rem] text-center'>Morbi elementum tellus non nunc fringilla, tempor imperdiet ex aliquam. Integer lacinia viverra blandit.</p>
						</div>
					</div>
					
					<button className='btn_light m-10'>Vamos conversar</button>
				</div>

				<motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
			</div>
      </motion.section>
    )
}