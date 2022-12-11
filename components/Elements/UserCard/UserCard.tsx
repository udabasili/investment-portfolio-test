import React from 'react';
import { UserCardContainer, UserCardImage, UserCardName, UserCardRole } from './index.styled';
import Image from 'next/image';
import { ibmPlexSans, ibmPlexSansCondensed } from '@/assets/fonts';

export const UserCard = () => {
	return (
		<UserCardContainer>
			<UserCardImage>
				<Image
					src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
					alt="Investment"
					fill
					className="image"
				/>
			</UserCardImage>
			<UserCardName className={ibmPlexSansCondensed.className}>James Peter</UserCardName>
			<UserCardRole className={ibmPlexSans.className}>Founder</UserCardRole>
		</UserCardContainer>
	);
};
