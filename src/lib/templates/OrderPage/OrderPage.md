```jsx
import { Container as Layout } from '../../components/Container/Container';
import { Flex, Badge, Row, Col } from 'antd';
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

const items = [
	{
		key: 1,
		label: (
			<Flex gap={10} align="center">
				<div>Main info</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 1</div>,
	},
	{
		key: 2,
		label: (
			<Flex gap={10} align="center">
				<div>Chat</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 2</div>,
	},
	{
		key: 3,
		label: (
			<Flex gap={10} align="center">
				<div>Dashboard</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 3</div>,
	},
	{
		key: 4,
		label: (
			<Flex gap={10} align="center">
				<div>Documents</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 4</div>,
	},
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
	<OrderTabs items={items} />
</Layout>;
```

```jsx noeditor
import Image1 from '../../assets/Order/order.png';
<img src={Image1} />;
```
