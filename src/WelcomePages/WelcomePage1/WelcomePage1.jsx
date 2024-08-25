// @flow

import React from 'react';
import { Welcome } from '../../lib/components/Welcome/Welcome';
import { FourImagesBg } from '../../lib/components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { welcomeButtons, authButtons, images } from './data';

export const WelcomePage1 = (): React$MixedElement => (
	<FourImagesBg imagesUrls={images}>
		<Welcome buttons={welcomeButtons}>
			<WelcomeAuthButtons>
				<WelcomeButton
					title={authButtons[0].title}
					onClick={authButtons[0].onClick}
				/>
				<WelcomeButton
					title={authButtons[1].title}
					onClick={authButtons[1].onClick}
				/>
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);
