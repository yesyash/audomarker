import { Header } from '@/components/header';
import Image from 'next/image';

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
						<div className='relative flex items-center justify-center max-w-xl mx-auto overflow-hidden rounded-full w-60 h-60 md:w-96 md:h-96 lg:w-full lg:h-full aspect-square bg-secondary-500'>
							<Image
								src="/how-it-works.png"
								width={428}
								height={986}
								alt=""
								className='w-48 mt-12 md:w-72 md:mt-16 lg:w-full lg:max-w-md lg:mt-28'
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
