import { devices } from '@/utils/responsiveBreakdown';
import styled from 'styled-components';

export const HeaderComponent = styled.header`
	background-color: transparent;
	height: 100vh;
	grid-column: full-start / full-end;
`;

export const Container = styled.div`
	padding-left: 30px;
	padding-right: 30px;
	height: 100%;
`;

export const Row = styled.div`
	display: grid;
	height: 100%;

	grid-template-columns: repeat(12, [col-start] 1fr);
`;

export const Col_8 = styled.div`
	grid-column: col-start 1 / col-start 7;
	padding: 2rem 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	${devices.tabPort} {
		grid-column: 1 / -1;
	}
`;

export const TextBox = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	text-align: left;
	transform: translate(-50%, -40%);

	h1 {
		margin-bottom: 2rem;
	}

	${devices.tabPort} {
		left: unset;
		top: unset;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transform: unset;
		text-align: center;
	}
`;
export const Col_4 = styled.div`
	grid-column: col-start 7 / col-start 12;
	position: relative;

	${devices.tabPort} {
		display: none;
	}
`;
