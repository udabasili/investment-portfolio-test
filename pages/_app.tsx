import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader';
import type { AppProps } from 'next/app';
import React from 'react';

import '../styles/globals.css';
import '../styles/utilities.css';

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			{!loading ? (
				<React.Fragment>
					<Component {...pageProps} />
				</React.Fragment>
			) : (
				<FullScreenLoader />
			)}
		</>
	);
}
