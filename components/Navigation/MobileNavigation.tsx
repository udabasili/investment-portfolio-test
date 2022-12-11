import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { ibmPlexSansCondensed } from '@/assets/fonts';
import { Drawer } from '../Elements/Drawer/Drawer';
import { CustomLink, MobileNav } from './index.styled';
import { navigationData } from './NavigationContent';

export const MobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => {
		setIsOpen(true);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', close);
		return () => {
			window.removeEventListener('scroll', close);
		};
	}, []);

	return (
		<Drawer isOpen={isOpen} open={open} close={close}>
			<MobileNav>
				<ul>
					{navigationData.map((linkName) => (
						<li key={linkName} className={ibmPlexSansCondensed.className}>
							<Link href={`#${linkName.toLowerCase()}`} passHref legacyBehavior>
								<CustomLink>{linkName}</CustomLink>
							</Link>
						</li>
					))}
				</ul>
			</MobileNav>
		</Drawer>
	);
};
