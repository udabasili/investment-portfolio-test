import { devices } from '@/utils/responsiveBreakdown';
import styled from 'styled-components';

const Section = styled.section`
	grid-column: full-start / full-end;
	grid-template-columns: inherit;
	display: grid;
	padding: 10rem 0;

	${devices.tabPort} {
		padding: 3rem 0;
	}
`;

/** About Section **/

export const AboutContainer = styled(Section)`
	background-color: white;
	padding: unset;
`;

export const AboutUsImage = styled.div`
	position: relative;
	grid-column: full-start 1 / col-end 4;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 1fr);
	align-items: center;
	grid-row: 1;
	display: grid;

	${devices.tabPort} {
		grid-column: 1 / -1;
		height: 50vh;
	}
`;

export const AboutUsContent = styled.div`
	background-color: #f9f7f6;
	grid-column: col-start 5 / full-end;
	padding: 6rem 8vw;
	display: grid;
	align-content: flex-start;
	justify-items: start;

	${devices.tabPort} {
		grid-column: 1 / -1;
		grid-row: unset;
	}
`;

/**  Portfolio **/

export const PortfolioContainer = styled(Section)`
	background-color: transparent;
	display: grid;
	grid-template-columns: inherit;
	flex-direction: column;
	align-items: center;
	padding: 3rem;

	${devices.tabPort} {
		padding: 3rem 0;
	}
`;

export const Slider = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
	padding: 2rem 4rem;
	grid-column: full-start 1 / col-end 4;
	margin: 4rem;

	input[type='range'] {
		width: 100%;
	}
	output {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	${devices.tabPort} {
		grid-column: 1 / -1;
		grid-row: unset;
	}
`;

export const BarChart = styled.div`
	position: relative;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: full-start 1 / col-end 4;
	width: 40vw;

	${devices.tabPort} {
		grid-column: 1 / -1;
		width: 90vw;
	}
`;

export const PortfolioDescription = styled.div`
	grid-column: col-start 5 / full-end;
	align-self: center;
	margin: 4rem;
	grid-row: 1 / 3;

	h2 {
		color: white;
	}

	${devices.tabPort} {
		grid-column: 1 / -1;
	}
`;

/**Our Team */
export const OurTeamContainer = styled(Section)`
	background-color: white;
	h2 {
		text-align: center;
		grid-column: 1 / -1;
	}
`;

export const OurTeamContent = styled.div`
	display: grid;
	grid-column: center-start / center-end;
	grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
	row-gap: 8rem;
	column-gap: 8rem;
`;
