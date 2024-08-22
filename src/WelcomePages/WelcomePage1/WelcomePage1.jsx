// @flow

import React from 'react';
import { Welcome } from '../../lib/components/Welcome/Welcome';
import { FourImagesBg } from '../../lib/components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { welcomeButtons } from './data';

interface IWelcomePage1Props {
	imagesUrls: { id: number, url: string }[];
}

export const WelcomePage1 = ({
	imagesUrls,
}: IWelcomePage1Props): React.Node => (
	<FourImagesBg imagesUrls={imagesUrls}>
		<Welcome buttons={welcomeButtons}>
			<WelcomeAuthButtons>
				<WelcomeButton title="G" onClick={(): any => {}} />
				<WelcomeButton title="VK" onClick={(): any => {}} />
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);
