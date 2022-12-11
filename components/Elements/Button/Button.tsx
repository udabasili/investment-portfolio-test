import React from 'react';
import { ButtonContainer } from './index.styled';

const colors = {
	black: '',
};

type ButtonProps = {
	children: React.ReactNode;
	color?: keyof typeof colors;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
	const { children } = props;
	return <ButtonContainer>{children}</ButtonContainer>;
};
