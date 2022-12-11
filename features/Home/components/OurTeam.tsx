import { ibmPlexSansCondensed } from '@/assets/fonts';
import { UserCard } from '@/components/Elements';
import React from 'react';
import { OurTeamContainer, OurTeamContent } from './index.styled';

export const OurTeam = () => {
	const filledArray = new Array(6).fill(1);

	return (
		<OurTeamContainer id="team">
			<h2 className={`${ibmPlexSansCondensed.className} u-margin-bottom-medium`}>Our Team</h2>
			<OurTeamContent>
				{filledArray.map((_, index) => (
					<UserCard key={index.toString()} />
				))}
			</OurTeamContent>
		</OurTeamContainer>
	);
};
