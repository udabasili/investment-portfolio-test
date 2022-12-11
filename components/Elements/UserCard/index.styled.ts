import styled from 'styled-components';

export const UserCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.22);
	border-radius: 3px;
	overflow: hidden;
	row-gap: 2rem;
	position: relative;
`;

export const UserCardImage = styled.div`
	grid-column: 1 / -1;
	grid-row: 1 / 2;
	position: relative;

	.image {
		width: 100%;
		height: 100%;
		position: relative !important;
		object-fit: cover; // Optional
	}
`;

export const UserCardName = styled.h5`
	grid-column: 1 / -1;
	grid-row: 1 / 2;
	text-align: center;
	width: 80%;
	z-index: 10;
	position: relative;
	padding: 1.2rem;
	background-color: var(--color-secondary);
	align-self: flex-end;
	transform: translateY(50%);
	justify-self: center;
	font-size: 1.6rem;
	color: white;
`;

export const UserCardRole = styled.p`
	grid-column: 1 / -1;
	text-align: center;
	padding: 3rem;
`;
