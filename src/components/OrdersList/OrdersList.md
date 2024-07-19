Данный компонент отображает список вкладок (tabs), в одной из которых используется компонент OrdersDiffHistory со сравнением двух историй заказов.
<br>
<br>
Пример использования OrdersList

```jsx static
// @flow

import React from 'react';
import Container from '../../components/Container/Container';
import OrdersList from '../../components/OrdersList/OrdersList';

const OrderPage = (): React$MixedElement => (
	<Container>
		<OrdersList />
	</Container>
);

export default OrderPage;
```

<br>
<br>
Пример OrdersList в коде. Содержит стилизованный вручную компонент Tabs из Ant Design, принимающий в качестве props OrderTabsItems (массив компонентов для каждого Tabs).

```jsx static
// @flow

import React from 'react';
import { StyledTabs } from './OrdersList.styles';
import { ordersTabsItems } from './OrdersListTabsItems/OrdersListTabsItems';

const OrdersList = (): React$MixedElement => (
	<StyledTabs items={ordersTabsItems} />
);

export default OrdersList;
```

<br>
<br>
Стили OrdersList.styles.js

```js static
import styled from 'styled-components';
import { Tabs } from 'antd';

export const OrdersContainer = styled.div`
	height: calc(100vh - 248px);
`;

export const StyledTabs = styled(Tabs)`
	.ant-tabs-nav {
		padding: 10px;
		margin: 0;
	}
	,
	.ant-tabs-tab {
		padding: 0;
	}
	.ant-tabs-tab-btn {
		padding: 10px;
		border: 1px solid #ccc;
	}
`;
```

<br>
<br>
Пример компонента OrderTabsItems.js в коде

```js static
import React from 'react';
import { Badge, Flex } from 'antd';
import OrdersDiffHistory from '../OrdersDiffHistory/OrdersDiffHistory';

export const ordersTabsItems = [
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
		children: <OrdersDiffHistory />,
	},
];
```

<br>
<br>
Компонент OrdersDiffHistory, использующийся в одном из Tabs. (Сравнение двух историй заказов).

```jsx static
// @flow

import React from 'react';
import { Flex, Steps } from 'antd';
import { stepsItems } from '../../../data/orders.list.data';
import { OrdersContainer } from '../OrdersList.styles';

const OrdersDiffHistory = (): React$MixedElement => (
	<>
		<OrdersContainer>
			<Flex style={{ height: '100%' }}>
				<div style={{ width: '50%' }}>
					<Flex style={{ height: '100%' }} justify="space-between">
						<Flex
							style={{
								overflow: 'auto',
							}}
						>
							<Steps
								progressDot
								current={4}
								direction="vertical"
								style={{ padding: '20px' }}
								items={stepsItems}
							/>
						</Flex>
						<Flex
							justify="center"
							align="center"
							style={{
								maxWidth: '60%',
								width: '100%',
								border: '1px solid black',
								fontSize: '2rem',
								margin: '10px 10px 0 0',
							}}
						>
							<div>Preview Page</div>
						</Flex>
					</Flex>
				</div>
				<div style={{ width: '50%' }}>
					<Flex gap={10} style={{ height: '100%' }} justify="space-between">
						<Flex
							style={{
								overflow: 'auto',
							}}
						>
							<Steps
								progressDot
								current={4}
								direction="vertical"
								style={{ padding: '20px' }}
								items={stepsItems}
							/>
						</Flex>
						<Flex
							justify="center"
							align="center"
							style={{
								maxWidth: '60%',
								width: '100%',
								border: '1px solid black',
								fontSize: '2rem',
								margin: '10px 10px 0 0',
							}}
						>
							<div>Preview Page</div>
						</Flex>
					</Flex>
				</div>
			</Flex>
		</OrdersContainer>
		<Flex wrap>
			<div
				style={{
					height: '100px',
					width: '100%',
					border: '1px solid black',
					margin: '10px',
				}}
			>
				<Flex justify="center" align="center" style={{ height: '100%' }}>
					DIFF
				</Flex>
			</div>
		</Flex>
	</>
);

export default OrdersDiffHistory;
```
