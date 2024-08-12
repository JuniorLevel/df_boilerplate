// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Welcome } from '../../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../../components/Welcome/SingleImageBg/SingleImageBg';
import { buttons } from '../../../components/Welcome/buttons';
import { WelcomeButton } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import Image2 from '../../../assets/Image2.jpg';

const WelcomePage6 = (): React.Node => (
	<SingleImageBg imageUrl={Image2}>
		<Welcome buttons={buttons}>
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

export default WelcomePage6;
