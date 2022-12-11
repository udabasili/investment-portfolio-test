import Head from 'next/head';
import React from 'react';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { Container, Main } from './index.styled';

type Props = {
	children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
	return (
		<Container>
			<Head>
				<title>Trust Advisor</title>
				<meta name="description" content="Nigeria's Number 1 RoboAdvisor" />
				<link rel="icon" href="/fav.ico" />
			</Head>
			<Navigation />
			<Main>{children}</Main>
			<Footer />
		</Container>
	);
};
