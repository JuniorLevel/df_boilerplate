```jsx
import { Container as Layout } from '../../components/Container/Container';
import { Row, Col } from 'antd';
import OrderVersion from '../../components/OrderTabs/OrderVersion/OrdersVersion';
import Order from '../../components/OrderTabs/Order/Order';
import OrderTabs from '../../components/OrderTabs/OrderTabs';
import OrderContainer from '../../components/OrderTabs/OrderContainer/OrderContainer';
import { buttons } from '../../components/Container/buttons';

const filters = [
	{
		title: 'Group1',
		description: 'CustomItem1',
	},
	{
		title: 'Group2',
		description: 'CustomItem2',
	},
	{
		title: 'Group3',
		description: 'CustomItem3',
	},
	{
		title: 'Group4',
		description: 'CustomItem4',
	},
	{
		title: 'Group5',
		description: 'CustomItem5',
	},
	{
		title: 'Group6',
		description: 'CustomItem6',
	},
];

const tabs = [
	{
		key: 1,
		title: 'Main info',
		count: 3,
		children: <div>Content of Tab Pane 1</div>,
	},
	{
		key: 2,
		title: 'Chat',
		count: 8,
		children: <div>Content of Tab Pane 2</div>,
	},
	{
		key: 3,
		title: 'Dashboard',
		count: 2,
		children: <div>Content of Tab Pane 3</div>,
	},
	{
		key: 4,
		title: 'Documents',
		count: 7,
		children: <div>Content of Tab Pane 4</div>,
	},
	{
		key: 5,
		title: 'History',
		count: 1,
		children: (
			<OrderContainer>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<Row gutter={[16, 16]}>
							<Col xs={12}>
								<OrderVersion filters={filters} />
							</Col>
							<Col xs={12}>
								<Order />
							</Col>
						</Row>
					</Col>

					<Col xs={12}>
						<Row gutter={[16, 16]}>
							<Col xs={12}>
								<Order />
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

<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
	<OrderTabs tabs={tabs} />
</Layout>;
```

```jsx noeditor
import Image1 from '../../assets/Order/order.png';
<img src={Image1} />;
```
