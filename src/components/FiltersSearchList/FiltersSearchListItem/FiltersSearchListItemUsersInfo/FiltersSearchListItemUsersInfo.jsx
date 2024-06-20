// @flow

import React from 'react';
import { Flex, Avatar } from 'antd';
// import style from 'styled-components';

interface IFiltersSearchListProps {
	dataSearchUsers: any;
}

const FiltersSearchListItemUsersInfo = ({
	dataSearchUsers,
}: IFiltersSearchListProps): React$MixedElement => (
	<Flex justify="space-between">
		{dataSearchUsers.map((user) => (
			<Flex
				key={user.id}
				gap={5}
				style={{
					padding: '2px 5px',
					border: '1px solid black',
					width: '33%',
				}}
			>
				<div style={{ border: '1px solid black', padding: '20px 25px' }}>
					{user.role}
				</div>
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
		))}
	</Flex>
);

export default FiltersSearchListItemUsersInfo;
