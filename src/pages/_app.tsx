import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${montserrat.variable} font-sans`}>
			<Component {...pageProps} />
		</div>
	);
}
