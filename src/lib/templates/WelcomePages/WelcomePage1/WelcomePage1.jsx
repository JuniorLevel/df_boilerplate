// @flow

import React from 'react';
import { Welcome } from '../../../components/Welcome/Welcome';
import { FourImagesBg } from '../../../components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { buttons } from '../../../components/Welcome/buttons';
import { WelcomeButton } from '../../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import Image1 from '../../../assets/Image1.jpg';
import Image2 from '../../../assets/Image2.jpg';
import Image3 from '../../../assets/Image3.jpg';
import Image4 from '../../../assets/Image4.jpg';

const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

const WelcomePage1 = (): React.Node => (
	<FourImagesBg imagesUrls={images}>
		<Welcome buttons={buttons}>
			<WelcomeAuthButtons>
				<WelcomeButton title="G" onClick={(): any => {}} />
				<WelcomeButton title="VK" onClick={(): any => {}} />
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);

export default WelcomePage1;
