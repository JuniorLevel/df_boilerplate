// @flow

import React from 'react';
import { Welcome } from '../../../../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../../../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { FourImagesBg } from '../../../../lib/components/Welcome/FourImagesBg/FourImagesBg';
import { buttons } from '../../../../lib/components/Welcome/buttons';
import { WelcomeButton } from '../../../../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import Image1 from '../../../../lib/components/Welcome/pictures/Image1.jpg';
import Image2 from '../../../../lib/components/Welcome/pictures/Image2.jpg';
import Image3 from '../../../../lib/components/Welcome/pictures/Image3.jpg';
import Image4 from '../../../../lib/components/Welcome/pictures/Image4.jpg';

const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

export const WelcomePage4 = (): React.Node => (
	<FourImagesBg imagesUrls={images}>
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
