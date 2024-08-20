// @flow

import React from 'react';
import { Welcome } from '../../../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { FourImagesBg } from '../../../../lib/components/Welcome/FourImagesBg/FourImagesBg';
import { buttons } from '../../../../lib/components/Welcome/buttons';
import { WelcomeButton } from '../../../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

interface IWelcomePage4Props {
	imagesUrls: { id: number, url: string }[];
}

export const WelcomePage4 = ({
	imagesUrls,
}: IWelcomePage4Props): React.Node => (
	<FourImagesBg imagesUrls={imagesUrls}>
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
	</FourImagesBg>
);
