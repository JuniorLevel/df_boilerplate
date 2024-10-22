// @flow

import React from 'react';
import { Flex, Avatar, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import styles from './SelectAndPerson.module.scss';

interface ISelectAndPersonProps {
	userRole: string;
	fio: string;
}

export const SelectAndPerson = ({
	userRole,
	fio,
}: ISelectAndPersonProps): React.Node => {
	const { Text } = Typography;
	const isMobile = useMediaQuery({
		query: '(max-width: 675px)',
	});

	return (
		<Flex wrap align="center" gap={5} className={styles.container}>
			<Flex
				className={styles.content}
				style={{
					...(isMobile && { flex: '1 1 150px' }),
				}}
			>
				<Text>{userRole}</Text>
				<Text className={styles.role}>role</Text>
			</Flex>
			<Flex className={styles.avatar} align="center" gap={10}>
				<Avatar className={styles.avatarItem}>FIO</Avatar>
				<Text>{fio}</Text>
			</Flex>
		</Flex>
	);
};
