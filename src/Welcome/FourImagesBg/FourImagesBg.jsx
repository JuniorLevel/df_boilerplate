// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { DivImageContainer, Image } from './FourImagesBg.styles';

interface IFourImagesBgProps {
	imagesUrls: { id: number, url: string }[];
	children: React.Node;
}

export const FourImagesBg = ({
	children,
	imagesUrls,
}: IFourImagesBgProps): React.Node => (
	<DivImageContainer>
		<MediaQuery minWidth={361}>
			{imagesUrls?.map((image) => (
				<Image key={image.id} src={image.url} alt={`background-${image.id}`} />
			))}
		</MediaQuery>
		{children}
	</DivImageContainer>
);
