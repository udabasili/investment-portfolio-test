import { devices } from '@/utils/responsiveBreakdown';
import styled from 'styled-components';

export const DrawerButton = styled.button`
	background-color: white;
	border: none;
	justify-content: center;
	align-items: center;
	display: none;
	width: 10vw;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}

	.button-icon {
		font-size: 2rem;
	}

	${devices.tabPort} {
		display: flex;
	}
`;
export const DrawerContainer = styled.div`
	display: flex;
	height: 100vh;
	position: fixed;
	z-index: 20;
	background-color: white;
	width: 0;
	right: 0;
	top: 0;
	transition: all 0.5s;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	${devices.tabPort} {
		&.open {
			width: 100vw;
		}
	}

	.close-button {
		position: absolute;
		left: 0;
		top: 0;
		margin: 3rem;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}
`;
