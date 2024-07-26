// @flow
import React from 'react';
import MediaQuery from 'react-responsive';
import { DivImageContainer, Image } from './SingleImageBg.styles';
import Image1 from '../../../assets/Image1.jpg';

interface IFourImagesBgProps {
	children: React$MixedElement;
}

export const SingleImageBg = ({
	children,
}: IFourImagesBgProps): React$MixedElement => (
	<DivImageContainer>
		<MediaQuery minWidth={361}>
			<Image src={Image1} alt="landscape" />
		</MediaQuery>
		{children}
	</DivImageContainer>
);
