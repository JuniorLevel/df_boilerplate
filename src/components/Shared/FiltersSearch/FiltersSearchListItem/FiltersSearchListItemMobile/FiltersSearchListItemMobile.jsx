// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Row, Col } from 'antd';
// import { StarOutlined } from '@ant-design/icons';
import FiltersSearchListItemUsersInfo from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
// import { StyledFavoriteButton } from '../FiltersSearchListItem.styles';
import FiltersSearchListItemMobileInfoStatus from './FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';
import StatusContainer from '../../../../StatusContainer/StatusContainer';

interface IFiltersSearchListItemMobile {
	listData: any;
}

const FiltersSearchListItemMobile = ({
	listData,
}: IFiltersSearchListItemMobile): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<Flex
			vertical
			justify="space-between"
			gap={20}
			style={{
				position: 'relative',
			}}
		>
			<Row gutter={[12, 12]}>
				{listData.dataSearch.map((item) => (
					<Col span={24} key={item.id}>
						<StatusContainer>
							<FiltersSearchListItemMobileInfoStatus
								key={item.id}
								item={item}
							/>
						</StatusContainer>
					</Col>
				))}
			</Row>
			<FiltersSearchListItemUsersInfo
				dataSearchUsers={listData.dataSearchUsers}
			/>
			{/* <StyledFavoriteButton
				ghost
				style={{
					top: -5,
					right: -5,
					color: 'black',
				}}
				icon={<StarOutlined style={{ fontSize: '30px' }} />}
			/> */}
		</Flex>
	</MediaQuery>
);

export default FiltersSearchListItemMobile;
