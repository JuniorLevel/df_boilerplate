// @flow

import React from 'react';
import { Row, Col } from 'antd';
import { FiltersSearchListItemUsersInfo } from '../../../FiltersSearchList/FiltersSearchListItem/FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import { OrderListPreviewGrids } from '../../OrderListPreviewGrids/OrderListPreviewGrids';
import { useStyles } from '../../orders.list.preview.styles';

interface IOrderListItemProps {
	data?: any | null;
}

export const OrderListItem = ({ data }: IOrderListItemProps): React.Node => {
	const { styles } = useStyles();
	return (
		<Row gutter={[12, 12]}>
			{data && (
				<>
					<OrderListPreviewGrids data={data} />
					<Col className={styles.orderListItemUsersInfo}>
						<FiltersSearchListItemUsersInfo
							dataSearchUsers={data.dataSearchUsers}
						/>
					</Col>
				</>
			)}
			{!data && <Col className={styles.orderListItemNotFound}>Not found</Col>}
		</Row>
	);
};
