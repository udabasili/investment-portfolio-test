import React from 'react';
import styled from 'styled-components';
import { Balls } from './Elements/balls';
import { Screeni } from './Elements/loadingScreen';

const LoadingScreen = () => {
	return (
		<Screeni>
			<Balls>
				<div className="ball one"></div>
				<div className="ball two"></div>
				<div className="ball three"></div>
			</Balls>
		</Screeni>
	);
};

export default LoadingScreen;
