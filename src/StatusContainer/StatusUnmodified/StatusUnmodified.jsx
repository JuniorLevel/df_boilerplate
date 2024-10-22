// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex, Badge } from 'antd';
import { useStyles } from './status.unmodified.styles';

interface IStatusUnmodifiedProps {
	children: React.Node;
	counter: number;
}

export const StatusUnmodified = ({
	children,
	counter,
}: IStatusUnmodifiedProps): React.Node => {
	const { styles } = useStyles();

	return (
		<Flex justify="space-between" align="center" className={styles.unmodified}>
			<Flex align="center">
				<div className={styles.fio}>FIO</div>
				<div>{children}</div>
			</Flex>
			<Flex gap={20}>
				{counter > 0 && <Badge count={counter} className={styles.badge} />}
				<Button
					ghost
					size="large"
					className={styles.moreBtn}
					icon={<MoreOutlined />}
				/>
			</Flex>
		</Flex>
	);
};
