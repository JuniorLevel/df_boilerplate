// @flow

import React from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import StatusContainer from '../../../../StatusContainer/StatusContainer';
import FiltersSearchListItemUsersInfoStatus from '../FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';

interface IFiltersSearchListItemUsersInfoMobile {
	dataSearchUsers: Array<any> | null;
}

const FiltersSearchListItemUsersInfoMobile = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoMobile): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
			{dataSearchUsers &&
				dataSearchUsers.map((user) => (
					<Col xs={24} sm={24} md={24} xl={8} key={user.id}>
						<StatusContainer>
							<FiltersSearchListItemUsersInfoStatus user={user} />
						</StatusContainer>
					</Col>
				))}
			{!dataSearchUsers && <div>Not found</div>}
		</Row>
	</MediaQuery>
);

export default FiltersSearchListItemUsersInfoMobile;
