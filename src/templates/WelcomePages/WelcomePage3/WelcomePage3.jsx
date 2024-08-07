// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Welcome } from '../../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { FourImagesBg } from '../../../components/Welcome/FourImagesBg/FourImagesBg';
import { buttons } from '../../../components/Welcome/buttons';
import { WelcomeButton } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

const WelcomePage3 = (): React.Node => (
	<FourImagesBg>
		<Welcome buttons={buttons}>
			<MediaQuery minWidth={361}>
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
			<MediaQuery maxWidth={360}>
				<WelcomeAuthButtons>
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
				</WelcomeAuthButtons>
			</MediaQuery>
		</Welcome>
	</FourImagesBg>
);

export default WelcomePage3;
