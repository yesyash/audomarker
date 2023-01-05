import { Header } from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Header />

			<main className="mt-[60px] md:mt-[68px]">
				<section className="bg-cream">
					<div className="max-w-4xl px-6 pt-10 mx-auto text-center md:pt-24">
						<h2 className="mb-4 text-sm font-medium uppercase text-primary-500 md:text-xl md:mb-6">
							Welcome to Audo
						</h2>
						<h1 className="mb-3 text-3xl leading-tight text-dark md:text-5xl md:mb-6">
							Your dreams are unique. Your career path should be too.
						</h1>
						<p className="max-w-[500px] mx-auto text-sm leading-snug text-dark mb-7 md:text-xl md:mb-12">
							Audo is the only personalized career building destination that
							helps you learn skills and earn money at the same time.
						</p>
						<button className="rounded-full bg-primary-500 py-3.5 px-8 text-white font-medium text-sm md:text-base hover:bg-primary-600 transition active:scale-95 ease-in-out">
							Get Started
						</button>
					</div>

					<div className="relative -mt-2 h-[calc(100vw_*_0.7)] md:h-[calc(100vw_*_0.3)] md:-mt-4">
						<Image
							src="/homepage-illustration-lg.png"
							fill
							style={{ objectFit: 'cover', objectPosition: 'top center' }}
							alt=""
						/>
					</div>
				</section>

				<section className='py-10 md:py-20'>
					<div className="max-w-4xl px-4 mx-auto mb-20 text-center">
						<h2 className="mb-4 text-sm font-medium uppercase text-secondary-500 md:text-xl md:mb-6">
							How It works
						</h2>
						<h1 className="mb-3 text-3xl leading-tight text-dark md:text-5xl md:mb-6">
							Cutting-edge tech. <br /> In-demand skills
						</h1>
						<p className="max-w-lg mx-auto text-sm leading-snug text-dark mb-7 md:text-xl md:mb-12">
							Our A.I. assessment - Audo Guide - recommends how to fill gaps in your knowledge for today's fastest growing careers.
						</p>
						<button className="rounded-full bg-secondary-500 py-3.5 px-8 text-white font-medium text-sm md:text-base hover:bg-secondary-600 transition active:scale-95 ease-in-out">
							Start Audo Guide
						</button>
					</div>

					<div>
						<div className='relative max-w-xl mx-auto rounded-full w-60 h-60 md:w-96 md:h-96 lg:w-full lg:h-full aspect-square bg-secondary-500'>
							<div className='relative z-10 flex items-center justify-center w-full h-full overflow-hidden rounded-full'>
								<Image
									src="/how-it-works.png"
									width={428}
									height={986}
									alt=""
									className='w-48 mt-12 md:w-72 md:mt-16 lg:w-full lg:max-w-md lg:mt-28'
								/>
							</div>

							<div className='absolute top-0 right-0 z-0 flex items-center gap-3 p-2 bg-white border border-gray-300 rounded-xl w-max'>
								<Image src="/illustrator-logo.png" className='bg-[#330000] rounded w-9 h-9 md:w-10 md:h-10 aspect-square' width={52} height={52} alt="Adobe Illustrator logo" />
								<div>
									<h3 className='mb-1.5 text-xs md:text-sm font-medium'>Adobe Illustrator</h3>
									<Link href="#" className='block px-2 py-0.5 text-[0.5rem] text-center border rounded-full md:text-xs text-primary-600 border-primary-500'>Acquire Skill</Link>
								</div>
							</div>

							<div className='absolute top-0 left-0 z-0 flex items-center gap-3 overflow-hidden rounded-xl w-max'>
								<div className='relative'>
									<Image src="/marina-harris-image.png" width={160} height={215} className=" w-24 aspect-[3/4] object-cover md:w-40" alt="Adobe Illustrator logo" />
									<div className='absolute top-0 flex flex-col justify-end w-full h-full p-2 text-white bg-gradient-to-t from-black/80 via-black/10 to-transparent'>
										<h6 className='text-[0.5rem] md:text-sm'>Marina Harris</h6>
										<p className='text-[0.35rem] md:text-xs'>Indiana University 21</p>
									</div>
								</div>
							</div>

							<div className='absolute bottom-0 right-0 z-0 p-2 bg-white border border-gray-300 w-44 rounded-xl'>
								<div className='flex gap-3 mb-2.5'>
									<Image src="/figma-logo.png" className='bg-[#2A2B27] p-2 rounded-lg w-9 h-9 md:w-10 md:h-10 aspect-square' width={52} height={52} alt="Adobe Illustrator logo" />
									<div>
										<p className='text-[0.5rem] font-medium mb-1 text-gray-500'>Offered by Google</p>
										<h3 className='mb-1.5 text-xs md:text-sm font-medium'>Foundations of User Experience (UX) Design</h3>
									</div>
								</div>

								<div className='h-1 mb-2 overflow-hidden bg-green-100 rounded-full'>
									<div className='w-10/12 h-full bg-green-700'></div>
								</div>

								<div className='flex justify-between text-[0.5rem] md:text-[10px] font-medium text-gray-600'>
									<span>80%</span>
									<span className='uppercase'>18HR to complete</span>
								</div>
							</div>

							<div className='absolute bottom-0 left-0 p-2 bg-white border border-gray-200 rounded-xl'>
								<div className='p-4 bg-gray-100 rounded-full'>
									<Image src="/after-effects-icon.png" className='w-8 h-8 rounded-lg md:w-10 md:h-10' width={100} height={100} alt="Adobe Illustrator logo" />
								</div>
							</div>

							<div className='absolute right-0 bg-white bottom-1/2'>
								<Image src="/job_card.png" className='h-16 rounded-lg w-28 md:w-52 md:h-32' width={210} height={128} alt="Adobe Illustrator logo" />
							</div>

							<div className='absolute left-0 p-2 text-center bg-white border border-gray-200 rounded-lg top-2/4'>
								<p className='text-[0.5rem] md:text-xs font-medium md:mb-2 mb-1 text-gray-500 uppercase'>Personality</p>
								<p className='text-3xl md:text-5xl'>🤔</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
