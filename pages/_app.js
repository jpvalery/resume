import '../styles/globals.css';

import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="description" content="My online resume" />
				<meta name="keywords" content="resume,cv,Jp Valery" />
				<meta name="author" content="Jp Valery" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
