// @flow

import React, { useContext, useEffect } from 'react';
import { Flex, Avatar } from 'antd';
import { StatusContext } from '../../../../../../../context/StatusContainerContext/StatusContainerContext';

interface IFiltersSearchListItemUsersInfoStatus {
	user: any;
}

const FiltersSearchListItemUsersInfoStatus = ({
	user,
}: IFiltersSearchListItemUsersInfoStatus): React$MixedElement => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(user.status);
	}, [user.status, setStatus]);

	return (
		<Flex
			wrap
			gap={5}
			style={{
				padding: '2px 5px',
			}}
		>
			<div style={{ padding: '20px 25px' }}>{user.role}</div>
			<Flex
				align="center"
				gap={10}
				style={{
					padding: '5px 15px',
					border: '1px solid black',
					width: '100%',
				}}
			>
				<Avatar icon={user.username.split(' ')[0][0]} />
				<div>{user.username}</div>
			</Flex>
		</Flex>
	);
};

export default FiltersSearchListItemUsersInfoStatus;
