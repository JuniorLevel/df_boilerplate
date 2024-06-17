// @flow

import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import Image4 from '../../assets/Image4.jpg';

const DivImage = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
`;

const Image = styled.img`
	position: absolute;
	width: 50%;
	height: 50%;
	object-fit: cover;
	z-index: -1;
	&:nth-child(1) {
		top: 0;
		left: 0;
	}
	&:nth-child(2) {
		top: 0;
		right: 0;
	}
	&:nth-child(3) {
		bottom: 0;
		left: 0;
	}
	&:nth-child(4) {
		bottom: 0;
		right: 0;
	}
`;

interface IFourImagesBgProps {
	children: React$MixedElement;
}

const FourImagesBg = ({ children }: IFourImagesBgProps): React$MixedElement => (
	<DivImage>
		<MediaQuery minWidth={361}>
			<Image src={Image1} alt="landscape" />
			<Image src={Image2} alt="space" />
			<Image src={Image3} alt="landscape 3" />
			<Image src={Image4} alt="landscape 4" />
		</MediaQuery>
		{children}
	</DivImage>
);

export default FourImagesBg;
