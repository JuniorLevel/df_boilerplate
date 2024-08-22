// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Welcome } from '../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../lib/components/Welcome/SingleImageBg/SingleImageBg';
import { WelcomeButton } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { welcomeButtons } from './data';

interface IWelcomePage5Props {
	imageUrl: string;
}

export const WelcomePage5 = ({ imageUrl }: IWelcomePage5Props): React.Node => (
	<SingleImageBg imageUrl={imageUrl}>
		<Welcome buttons={welcomeButtons}>
			<MediaQuery minWidth={361}>
				<WelcomeAuthButtons>
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
				</WelcomeAuthButtons>
			</MediaQuery>
			<MediaQuery maxWidth={360}>
				<WelcomeAuthButtons>
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
				</WelcomeAuthButtons>
			</MediaQuery>
		</Welcome>
	</SingleImageBg>
);
