// @flow

import React from 'react';
import { Flex, Avatar } from 'antd';
import MediaQuery from 'react-responsive';

interface IFiltersSearchListItemUsersInfoMobile {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfoMobile = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoMobile): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<Flex justify="space-between" vertical gap="small">
			{dataSearchUsers.map((user) => (
				<Flex
					vertical
					key={user.id}
					style={{
						border: '1px solid black',
					}}
				>
					<div style={{ border: '1px solid black', padding: '20px 25px' }}>
						{user.role}
					</div>
					<Flex
						align="center"
						gap="small"
						style={{
							padding: '15px 15px',
							border: '1px solid black',
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

export default FiltersSearchListItemUsersInfoMobile;
