import { devices } from '@/utils/responsiveBreakdown';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	display: flex;
	grid-column: full-start / full-end;
	background-color: transparent;
	height: max-content;
	width: 100%;
	height: 10vh;
`;

export const Logo = styled.div`
	flex-grow: 1;
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-size: 1.8rem;
		margin-left: 0.7rem;
		text-transform: uppercase;
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-basis: 80%;

	${devices.tabPort} {
		display: none;
	}

	ul {
		display: inherit;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;

		li {
			list-style: none;
			font-size: 1.6rem;
			text-transform: uppercase;
			color: black;
			cursor: pointer;
			font-weight: bold;
		}
	}
`;

export const CustomLink = styled.a`
	&:link,
	&:visited {
		color: black;
		text-decoration: none;
	}

	&:active {
		text-decoration: underline;
	}

	&:hover {
		opacity: 0.7;
	}
`;

export const MobileNavigationContainer = styled.div`
	color: black;
`;

export const MobileNav = styled.nav`
	display: none;

	${devices.tabPort} {
		display: flex;
	}

	ul {
		display: inherit;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;

		li {
			list-style: none;
			font-size: 4rem;
			padding-bottom: 1rem;
			text-transform: uppercase;
			color: black;
			font-weight: bold;
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}
	}
`;
