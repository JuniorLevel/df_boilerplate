// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex, Badge } from 'antd';
import { useStyles } from './status.updated.styles';

interface IStatusUpdatedProps {
	children: React.Node;
	counter: number;
}

export const StatusUpdated = ({
	children,
	counter,
}: IStatusUpdatedProps): React.Node => {
	const { styles } = useStyles();

	return (
		<Flex justify="space-between" align="center" className={styles.updated}>
			<Flex align="center">
				<div className={styles.fio}>FIO</div>
				<div>{children}</div>
			</Flex>
			<Flex gap={15}>
				<Button
					className={styles.closeBtn}
					ghost
					size="large"
					icon={<CloseCircleOutlined />}
				/>
				<Button
					className={styles.checkBtn}
					ghost
					size="large"
					icon={<CheckCircleOutlined />}
				/>
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
