// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import StatusContainer from '../../../../../StatusContainer/StatusContainer';
import FiltersSearchListItemUsersInfoStatus from './FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';

interface IFiltersSearchListItemUsersInfoDesktop {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfoDesktop = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
			{dataSearchUsers.map((user) => (
				// <Col xs={24} sm={24} md={24} xl={8} key={user.id}>
				// 	<StatusContainer>
				// 		<FiltersSearchListItemUsersInfoStatus user={user} />
				// 	</StatusContainer>
				// </Col>
				<Col flex={1} key={user.id}>
					<StatusContainer>
						<FiltersSearchListItemUsersInfoStatus user={user} />
					</StatusContainer>
				</Col>
			))}
		</Row>
	</MediaQuery>
);

export default FiltersSearchListItemUsersInfoDesktop;
