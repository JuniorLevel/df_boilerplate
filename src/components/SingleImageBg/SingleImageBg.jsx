// @flow
import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Image1 from '../../assets/Image1.jpg';

const DivImage = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;

interface IFourImagesBgProps {
	children: React$MixedElement;
}

const FourImagesBg = ({ children }: IFourImagesBgProps): React$MixedElement => (
	<DivImage>
		<MediaQuery minWidth={361}>
			<Image src={Image1} alt="landscape" />
		</MediaQuery>
		{children}
	</DivImage>
);

export default FourImagesBg;
