// @flow

import MoreOutlined from '@ant-design/icons/MoreOutlined';
import React from 'react';
import { Button } from 'antd';
import styles from './CardElement.module.scss';

interface ICardElementProps {
	title: string | React.Node;
	actionOnBody?: boolean;
	children?: React.Node;
}

export const CardElement = ({
	title,
	actionOnBody,
	children,
}: ICardElementProps): React.Node => (
	<div className={styles.container}>
		<div className={styles.cardElement}>
			<div
				className={
					actionOnBody ? styles.cardElementActionOnBody : styles.cardElement
				}
			>
				<Button
					ghost
					size="large"
					className={styles.moreBtn}
					icon={<MoreOutlined />}
				/>
			</div>
			<div className={styles.title}>{title}</div>
		</div>
		{children}
	</div>
);
