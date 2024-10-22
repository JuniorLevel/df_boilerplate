// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex } from 'antd';
import { useStyles } from './status.changed.styles';

interface IStatusChanged {
	children: React.Node;
	role: string;
}

export const StatusChanged = ({
	children,
	role,
}: IStatusChanged): React.Node => {
	const { styles } = useStyles();

	return (
		<Flex className={styles.changed}>
			{role && (
				<Flex align="center" className={styles.container}>
					{role}
					<div className={styles.role}>role</div>
				</Flex>
			)}
			<Flex align="center">
				<div className={styles.fio}>FIO</div>
				<div>{children}</div>
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
