// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { useStyles } from './fourImagesBg.styles';

interface IFourImagesBgProps {
	imagesUrls: { id: number, url: string }[];
	children: React.Node;
}

export const FourImagesBg = ({
	children,
	imagesUrls,
}: IFourImagesBgProps): React.Node => {
	const { styles } = useStyles();

	return (
		<div className={styles.image}>
			<MediaQuery minWidth={361}>
				{imagesUrls?.map((image) => (
					<img key={image.id} src={image.url} alt={`background-${image.id}`} />
				))}
			</MediaQuery>
			{children}
		</div>
	);
};
