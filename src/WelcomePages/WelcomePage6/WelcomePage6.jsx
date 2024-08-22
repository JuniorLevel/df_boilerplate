// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Welcome } from '../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../lib/components/Welcome/SingleImageBg/SingleImageBg';
import { WelcomeButton } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { welcomeButtons } from './data';

interface IWelcomePage6Props {
	imageUrl: string;
}

export const WelcomePage6 = ({ imageUrl }: IWelcomePage6Props): React.Node => (
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
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
				</WelcomeAuthButtons>
			</MediaQuery>
		</Welcome>
	</SingleImageBg>
);
