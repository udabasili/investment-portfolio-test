import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { DrawerButton, DrawerContainer } from './index.styled';

type Props = {
	isOpen: boolean;
	open: () => void;
	children: React.ReactNode;
	close: () => void;
};
export const Drawer = (props: Props) => {
	const { isOpen, open, close, children } = props;
	return (
		<>
			<DrawerButton onClick={open}>
				<GiHamburgerMenu className="button-icon" />
			</DrawerButton>
			<DrawerContainer className={`${isOpen ? 'open' : ''}`}>
				<AiFillCloseCircle color="red" className="close-button" fontSize="3.4rem" onClick={close} />
				{children}
			</DrawerContainer>
		</>
	);
};
