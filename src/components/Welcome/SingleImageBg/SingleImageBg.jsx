// @flow
import React from 'react';
import MediaQuery from 'react-responsive';
import Image1 from '../../../assets/Image1.jpg';
import { DivImageContainer, Image } from './SingleImageBg.styles';

interface IFourImagesBgProps {
	children: React$MixedElement;
}

const FourImagesBg = ({ children }: IFourImagesBgProps): React$MixedElement => (
	<DivImageContainer>
		<MediaQuery minWidth={361}>
			<Image src={Image1} alt="landscape" />
		</MediaQuery>
		{children}
	</DivImageContainer>
);

export default FourImagesBg;
