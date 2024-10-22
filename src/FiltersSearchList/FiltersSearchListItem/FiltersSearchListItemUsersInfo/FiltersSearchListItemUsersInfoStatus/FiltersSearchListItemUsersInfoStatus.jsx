// @flow

import React, { useContext, useEffect } from 'react';
import { Flex, Avatar } from 'antd';
import { StatusContext } from '../../../../context/StatusContainerContext/StatusContainerContext';
import { useStyles } from '../../../filters.search.list.styles';

interface IFiltersSearchListItemUsersInfoStatus {
	user: any;
}

export const FiltersSearchListItemUsersInfoStatus = ({
	user,
}: IFiltersSearchListItemUsersInfoStatus): React$MixedElement => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(user.status);
	}, [user.status, setStatus]);

	const { styles } = useStyles();

	return (
		<Flex
			className={styles.filtersSearchListItemUsersInfoStatusUser}
			align="center"
			gap={10}
		>
			<div>{user.role}</div>
			<Flex align="center" gap={10}>
				<Avatar icon={user.username.split(' ')[0][0]} />
				<div>{user.username}</div>
			</Flex>
		</Flex>
	);
};
