// @flow

import React from 'react';
import { Welcome } from '../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../lib/components/Welcome/SingleImageBg/SingleImageBg';
import { WelcomeButton } from '../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { welcomeButtons } from './data';

interface IWelcomePage8Props {
	imageUrl: string;
}

export const WelcomePage8 = ({ imageUrl }: IWelcomePage8Props): React.Node => (
	<SingleImageBg imageUrl={imageUrl}>
		<Welcome buttons={welcomeButtons}>
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
		</Welcome>
	</SingleImageBg>
);
