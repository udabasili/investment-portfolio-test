import { ibmPlexSansCondensed, montserrat } from '@/assets/fonts';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { CustomLink, Logo, Nav, NavigationContainer } from './index.styled';
import { MobileNavigation } from './MobileNavigation';
import { navigationData } from './NavigationContent';
import investment from '@/assets/icons/return-of-investment.png';
import Link from 'next/link';

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Logo>
				<Image alt="Trust Advisor" src={investment} width={30} height={30} />
				<span className={montserrat.className}>Trust Advisor</span>
			</Logo>
			<MobileNavigation />
			<Nav>
				<ul>
					{navigationData.map((linkName) => (
						<li key={linkName} className={ibmPlexSansCondensed.className}>
							<Link href={`/#${linkName.toLowerCase()}`} passHref legacyBehavior>
								<CustomLink>{linkName}</CustomLink>
							</Link>
						</li>
					))}
				</ul>
			</Nav>
		</NavigationContainer>
	);
};
