// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import FiltersSearchListItemUsersInfoMobile from './FiltersSearchListItemUsersInfoMobile/FiltersSearchListItemUsersInfoMobile';
import StatusContainer from '../../../StatusContainer/StatusContainer';
import FiltersSearchListItemUsersInfoStatus from "./FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus";

interface IFiltersSearchListProps {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfo = ({
	dataSearchUsers,
}: IFiltersSearchListProps): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
				{dataSearchUsers.map((user) => (
					<Col flex={1} key={user.id}>
						<StatusContainer>
							<FiltersSearchListItemUsersInfoStatus user={user} />
						</StatusContainer>
					</Col>
				))}
			</Row>
		</MediaQuery>
		<FiltersSearchListItemUsersInfoMobile dataSearchUsers={dataSearchUsers} />
	</>
);

export default FiltersSearchListItemUsersInfo;
