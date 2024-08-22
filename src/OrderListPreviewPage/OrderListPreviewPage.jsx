// @flow

import React from 'react';
import { Col, Pagination as OrdersPagination } from 'antd';
import { OrderListProvider } from '../lib/components/context/OrderListContext/OrderListContext';
import { Layout } from '../lib/components/Layout/Layout';
import { OrdersFilterClosed } from '../lib/components/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListPreviewContainer } from '../lib/components/OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { OrderListContainer } from '../lib/components/OrderListPreview/OrderListContainer/OrderListContainer';
import { Order } from '../lib/components/OrderListPreview/Order/Order';
import { OrderListItem } from '../lib/components/OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';
import { sidebarButtons, filters, data } from './data';

export const OrderListPreviewPage = (): React$MixedElement => (
	<OrderListProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterClosed open={false} filters={filters} />
			<OrderListPreviewContainer height={160}>
				<Col span={12}>
					<OrderListContainer>
						<OrderListItem key={data[0].id} data={data[0]} />
						<OrderListItem key={data[1].id} data={data[1]} />
						<OrderListItem key={data[2].id} data={data[2]} />
						<OrderListItem key={data[3].id} data={data[3]} />
						<OrderListItem key={data[4].id} data={data[4]} />
						<OrderListItem key={data[5].id} data={null} />
						<OrderListItem key={data[6].id} />
					</OrderListContainer>
					<OrdersPagination total={50} />
				</Col>
				<Col span={12}>
					<Order />
				</Col>
			</OrderListPreviewContainer>
		</Layout>
	</OrderListProvider>
);
