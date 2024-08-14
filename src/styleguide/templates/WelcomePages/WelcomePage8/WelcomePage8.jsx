// @flow

import React from 'react';
import { Welcome } from '../../../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { SingleImageBg } from '../../../../lib/components/Welcome/SingleImageBg/SingleImageBg';
import { buttons } from '../../../../lib/components/Welcome/buttons';
import { WelcomeButton } from '../../../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import Image4 from '../../../../lib/components/Welcome/pictures/Image4.jpg';

export const WelcomePage8 = (): React.Node => (
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
