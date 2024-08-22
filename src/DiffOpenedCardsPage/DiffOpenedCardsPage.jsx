// @flow

import React from 'react';
import { Row, Col, Pagination as OrdersPagination } from 'antd';
import { Layout } from '../lib/components/Layout/Layout';
import { Footer } from '../lib/components/Footer/Footer';
import { OrderListPreviewContainer } from '../lib/components/OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { OrderListContainer } from '../lib/components/OrderListPreview/OrderListContainer/OrderListContainer';
import { OrderListItem } from '../lib/components/OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';
import { Order } from '../lib/components/OrderListPreview/Order/Order';
import { OrdersFilterOpened } from '../lib/components/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { sidebarButtons, filters, data } from './data';

export const DiffOpenedCardsPage = (): React$MixedElement => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<Row>
			<Col span={12}>
				<OrdersFilterOpened open filters={filters} />
				<OrderListPreviewContainer height={555}>
					<Col span={12}>
						<OrderListContainer>
							<OrderListItem key={data[0].id} data={data[0]} />
							<OrderListItem key={data[1].id} data={data[1]} />
							<OrderListItem key={data[2].id} data={data[2]} />
							<OrderListItem key={data[3].id} data={data[3]} />
							<OrderListItem key={data[4].id} data={data[4]} />
							<OrderListItem key={data[5].id} data={data[5]} />
							<OrderListItem key={data[6].id} data={null} />
						</OrderListContainer>
						<OrdersPagination defaultCurrent={1} total={50} />
					</Col>
					<Col span={12}>
						<Order />
					</Col>
				</OrderListPreviewContainer>
			</Col>
			<Col span={12}>
				<OrdersFilterOpened open filters={filters} />
				<OrderListPreviewContainer height={555}>
					<Col span={12}>
						<OrderListContainer>
							<OrderListItem key={data[0].id} data={data[0]} />
							<OrderListItem key={data[1].id} data={data[1]} />
							<OrderListItem key={data[2].id} data={data[2]} />
							<OrderListItem key={data[3].id} data={data[3]} />
							<OrderListItem key={data[4].id} data={data[4]} />
							<OrderListItem key={data[5].id} data={data[5]} />
							<OrderListItem key={data[6].id} data={null} />
						</OrderListContainer>
						<OrdersPagination defaultCurrent={1} total={50} />
					</Col>
					<Col span={12}>
						<Order />
					</Col>
				</OrderListPreviewContainer>
			</Col>
		</Row>
		<Footer />
	</Layout>
);
