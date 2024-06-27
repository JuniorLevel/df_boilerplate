// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import StatusContainer from '../../../../../StatusContainer/StatusContainer';
import FiltersSearchListItemUsersInfoStatus from './FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';

interface IFiltersSearchListItemUsersInfoDesktop {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfoDesktop = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Flex wrap gap={10}>
			{dataSearchUsers.map((user) => (
				<StatusContainer key={user.id}>
					<FiltersSearchListItemUsersInfoStatus user={user} />
				</StatusContainer>
			))}
		</Flex>
	</MediaQuery>
);

export default FiltersSearchListItemUsersInfoDesktop;
