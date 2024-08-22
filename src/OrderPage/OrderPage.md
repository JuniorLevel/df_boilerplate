```jsx
import React from 'react';
import { Flex, Badge, Row, Col } from 'antd';
import { Layout } from '../lib/components/Layout/Layout';
import { OrderVersion } from '../lib/components/OrderTabs/OrderVersion/OrdersVersion';
import { OrderPreview } from '../lib/components/OrderTabs/OrderPreview/OrderPreview';
import { OrderTabs } from '../lib/components/OrderTabs/OrderTabs';
import { OrderContainer } from '../lib/components/OrderTabs/OrderContainer/OrderContainer';
import { filters, items, sidebarButtons } from './data';

const tabs = [
	...items,
	{
		key: 5,
		label: (
			<Flex gap={10} align="center">
				<div>History</div>
				<Badge count={3} />
			</Flex>
		),
		children: (
			<OrderContainer>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<Row gutter={[16, 16]}>
							<Col xs={12}>
								<OrderVersion filters={filters} />
							</Col>
							<Col xs={12}>
								<OrderPreview />
							</Col>
						</Row>
					</Col>

					<Col xs={12}>
						<Row gutter={[16, 16]}>
							<Col xs={12}>
								<OrderPreview />
							</Col>
							<Col xs={12}>
								<OrderVersion filters={filters} />
							</Col>
						</Row>
					</Col>
				</Row>
			</OrderContainer>
		),
	},
];

<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
	<OrderTabs items={tabs} />
</Layout>;
```

```jsx noeditor
import Image1 from './order.png';
<img src={Image1} />;
```
