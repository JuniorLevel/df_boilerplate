// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import Image1 from '../../../assets/Image1.jpg';
import Image2 from '../../../assets/Image2.jpg';
import Image3 from '../../../assets/Image3.jpg';
import Image4 from '../../../assets/Image4.jpg';
import { DivImageContainer, Image } from './FourImagesBg.styles';

interface IFourImagesBgProps {
	children: React$MixedElement;
}

const FourImagesBg = ({ children }: IFourImagesBgProps): React$MixedElement => (
	<DivImageContainer>
		<MediaQuery minWidth={361}>
			<Image src={Image1} alt="landscape" />
			<Image src={Image2} alt="space" />
			<Image src={Image3} alt="landscape 3" />
			<Image src={Image4} alt="landscape 4" />
		</MediaQuery>
		{children}
	</DivImageContainer>
);

export default FourImagesBg;
