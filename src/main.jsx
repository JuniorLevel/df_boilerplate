// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Col, Pagination as OrdersPagination } from 'antd';
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper';
import { data, filters, sidebarButtons } from './data';
import { Layout } from './Layout/Layout';
import { OrdersFilterProvider } from './context/OrdersFilterContext/OrdersFilterContext';
import { OrdersFilterClosed } from './OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListItem } from './OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';
import { OrderListPreviewContainer } from './OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { OrderListContainer } from './OrderListPreview/OrderListContainer/OrderListContainer';
import { Order } from './OrderListPreview/Order/Order';

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);

	root.render(
		<StrictMode>
			<ThemeWrapper>
				<OrdersFilterProvider>
					<Layout
						buttons={sidebarButtons}
						title="Caption"
						avatar={{ title: 'AV' }}
					>
						<OrdersFilterClosed open={false} dialog={false} filters={filters} />
						<OrderListPreviewContainer>
							<Col span={12}>
								<OrderListContainer>
									<OrderListItem key={data[0].id} data={data[0]} />
									<OrderListItem key={data[1].id} data={data[1]} />
									<OrderListItem key={data[2].id} data={data[2]} />
									<OrderListItem key={data[3].id} data={data[3]} />
									<OrderListItem key={data[4].id} data={data[4]} />
									<OrderListItem key={data[5].id} data={null} />
								</OrderListContainer>
								<OrdersPagination total={50} />
							</Col>
							<Col span={12}>
								<Order />
							</Col>
						</OrderListPreviewContainer>
					</Layout>
				</OrdersFilterProvider>
			</ThemeWrapper>
		</StrictMode>
	);
}
