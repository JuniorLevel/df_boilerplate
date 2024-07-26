// @flow

import React from 'react';
import { Welcome } from '../../components/Welcome/Welcome';
import { FourImagesBg } from '../../components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { buttons } from '../../components/Welcome/buttons';
import { WelcomeButton } from '../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

const WelcomePage1 = (): React.Node => (
	<FourImagesBg>
		<Welcome buttons={buttons}>
			<WelcomeAuthButtons>
				<WelcomeButton title="G" onClick={(): any => {}} />
				<WelcomeButton title="VK" onClick={(): any => {}} />
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);

export default WelcomePage1;
