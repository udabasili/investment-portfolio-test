import { ibmPlexSans, ibmPlexSansCondensed } from '@/assets/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../Elements';
import { Col_4, Col_8, Container, HeaderComponent, Row, TextBox } from './index.styled';

export const Header = () => {
	return (
		<HeaderComponent id="home">
			<Container>
				<Row>
					<Col_8>
						<TextBox>
							<div className="u-margin-bottom-medium">
								<h1 className={ibmPlexSansCondensed.className}>
									in need of financial advice? we can help
								</h1>
								<h3 className={ibmPlexSansCondensed.className}>Nigeria{"'"}s Number 1 RoboAdvisor</h3>
							</div>
							<Link href="#about">
								<Button className={ibmPlexSansCondensed.className}>Get Started</Button>
							</Link>
						</TextBox>
					</Col_8>
					<Col_4>
						<Image
							src="/header.svg"
							alt="Vercel Logo"
							fill
							priority
							sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
							style={{
								objectFit: 'contain',
							}}
						/>
					</Col_4>
				</Row>
			</Container>
		</HeaderComponent>
	);
};
