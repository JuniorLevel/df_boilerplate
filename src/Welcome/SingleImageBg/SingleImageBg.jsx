// @flow
import React from 'react';
import MediaQuery from 'react-responsive';
import { DivImageContainer, Image } from './SingleImageBg.styles';

interface IFourImagesBgProps {
	imageUrl: string;
	children: React.Node;
}

export const SingleImageBg = ({
	children,
	imageUrl,
}: IFourImagesBgProps): React$MixedElement => (
	<DivImageContainer>
		<MediaQuery minWidth={361}>
			<Image src={imageUrl} alt="background" />
		</MediaQuery>
		{children}
	</DivImageContainer>
);
