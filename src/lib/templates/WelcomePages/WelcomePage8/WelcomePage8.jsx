// @flow

import React from 'react';
import { Welcome } from '../../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../../components/Welcome/SingleImageBg/SingleImageBg';
import { buttons } from '../../../components/Welcome/buttons';
import { WelcomeButton } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import Image4 from '../../../assets/Image4.jpg';

const WelcomePage8 = (): React.Node => (
	<SingleImageBg imageUrl={Image4}>
		<Welcome buttons={buttons}>
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

export default WelcomePage8;
