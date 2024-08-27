// @flow

import React from 'react';
import { Row } from 'antd';
import { FiltersSearchListItemUsersInfo } from '../../../FiltersSearchList/FiltersSearchListItem/FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import { OrderListPreviewGrids } from '../../OrderListPreviewGrids/OrderListPreviewGrids';

interface IOrderListItemProps {
	data?: any | null;
}

export const OrderListItem = ({
	data,
}: IOrderListItemProps): React$MixedElement => (
	<Row gutter={[12, 12]}>
		{data && (
			<>
				<OrderListPreviewGrids data={data} />
				<div style={{ width: '100%' }}>
					<FiltersSearchListItemUsersInfo
						dataSearchUsers={data.dataSearchUsers}
					/>
				</div>
			</>
		)}
		{!data && (
			<>
				<div
					style={{
						width: '100%',
						margin: '0 6px',
						border: '1px solid black',
						padding: '10px',
						textAlign: 'center',
					}}
				>
					Not found
				</div>
				<div style={{ width: '100%', padding: '0 6px' }}>
					<FiltersSearchListItemUsersInfo dataSearchUsers={null} />
				</div>
			</>
		)}
	</Row>
);
