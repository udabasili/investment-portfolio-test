import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns:
		[full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
		[center-end] minmax(6rem, 1fr) [full-end];

	min-height: 100vh;
	background-color: var(--color-primary);
`;

export const Main = styled.main`
	display: grid;
	grid-column: full-start / full-end;
	grid-template-columns:
		[full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
		[center-end] minmax(6rem, 1fr) [full-end];
`;
