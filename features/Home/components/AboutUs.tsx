import Image from 'next/image';
import React from 'react';

import { ibmPlexSansCondensed, ibmPlexSans } from '@/assets/fonts';
import { AboutContainer, AboutUsContent, AboutUsImage } from './index.styled';

export const AboutUs = () => {
	return (
		<AboutContainer id="about">
			<AboutUsContent>
				<h3 className={`${ibmPlexSansCondensed.className} u-margin-bottom-small`}>Happy Customers</h3>
				<h2 className={`${ibmPlexSansCondensed.className} u-margin-bottom-medium`}>What we do</h2>
				<p className={ibmPlexSans.className}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex ante, ultricies non maximus
					sed, euismod eu lorem. Nunc feugiat maximus sollicitudin. Aenean sed malesuada odio. Sed turpis
					enim, venenatis ac efficitur ut, viverra nec diam. Donec vel luctus tortor. Donec ut odio facilisis
					orci commodo interdum a non nisl. Donec aliquam, orci et ultrices eleifend, quam felis iaculis nisl,
					in vestibulum sapien nisi vitae lacus. Aenean tristique nulla eu risus facilisis, ut pharetra ante
					cursus. Sed elementum nunc eros, sit amet egestas turpis egestas in. Sed ac tellus erat. Donec
					molestie a tortor quis dignissim. Nullam lacinia, mauris sit amet mollis varius, elit metus euismod
					justo, eu porta lorem metus quis lorem. Praesent eget libero justo. Praesent elementum orci et arcu
					pretium, id tincidunt mauris accumsan.
				</p>
			</AboutUsContent>
			<AboutUsImage>
				<Image
					src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
					alt="Investment"
					fill
					className="image"
					style={{
						objectFit: 'cover',
					}}
					sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw
                    "
				/>
			</AboutUsImage>
		</AboutContainer>
	);
};
