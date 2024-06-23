// @flow

import React from 'react';
import { Flex, Avatar } from 'antd';
import MediaQuery from 'react-responsive';

interface IFiltersSearchListItemUsersInfoDesktop {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfoDesktop = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Flex justify="space-between">
			{dataSearchUsers.map((user) => (
				<Flex
					wrap
					key={user.id}
					gap={5}
					style={{
						padding: '2px 5px',
						border: '1px solid black',
						width: '100%',
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
			))}
		</Flex>
	</MediaQuery>
);

export default FiltersSearchListItemUsersInfoDesktop;
