// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Welcome } from '../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../lib/components/Welcome/SingleImageBg/SingleImageBg';
import { WelcomeButton } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { welcomeButtons, authButtons } from './data';
import image from '../../lib/components/Welcome/pictures/Image1.jpg';

export const WelcomePage5 = (): React$MixedElement => (
	<SingleImageBg imageUrl={image}>
		<Welcome buttons={welcomeButtons}>
			<MediaQuery minWidth={361}>
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
			</MediaQuery>
			<MediaQuery maxWidth={360}>
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
			</MediaQuery>
		</Welcome>
	</SingleImageBg>
);
