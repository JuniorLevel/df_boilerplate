// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Row, Col } from 'antd';
import { FiltersSearchListItemUsersInfo } from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import { FiltersSearchListItemMobileInfoStatus } from './FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';

interface IFiltersSearchListItemMobile {
	listData: any | null;
}

export const FiltersSearchListItemMobile = ({
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
				{listData?.dataSearch.map((item) => (
					<Col span={24} key={item.id}>
						<StatusContainer>
							<FiltersSearchListItemMobileInfoStatus
								key={item.id}
								item={item}
							/>
						</StatusContainer>
					</Col>
				))}
				{!listData && (
					<Col span={24}>
						<div style={{ border: '1px solid black' }}>Not found</div>
					</Col>
				)}
			</Row>
			{listData && (
				<FiltersSearchListItemUsersInfo
					dataSearchUsers={listData.dataSearchUsers}
				/>
			)}
			{!listData && <FiltersSearchListItemUsersInfo dataSearchUsers={null} />}
		</Flex>
	</MediaQuery>
);
