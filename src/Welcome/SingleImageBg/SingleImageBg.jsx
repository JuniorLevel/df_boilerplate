// @flow
import React from 'react';
import MediaQuery from 'react-responsive';
import { useStyles } from './singleImageBg.styles';

interface IFourImagesBgProps {
	imageUrl: string;
	children: React.Node;
}

export const SingleImageBg = ({
	children,
	imageUrl,
}: IFourImagesBgProps): React.Node => {
	const { styles } = useStyles();

	return (
		<div className={styles.image}>
			<MediaQuery minWidth={361}>
				<img src={imageUrl} alt="background" />
			</MediaQuery>
			{children}
		</div>
	);
};
