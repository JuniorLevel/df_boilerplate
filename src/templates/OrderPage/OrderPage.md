Компонент OrderPage содержит в себе панель вкладок. Во вкладке History рендерится компонент DeffHistory, состоящий из двух компонентов DiffHistoryLeft и DiffHistoryRight.

```jsx
import React from 'react';
import Container from '../../components/Container/Container';
import OrdersList from '../../components/OrdersList/OrdersList';

<Container>
	<OrdersList />
</Container>;
```

Пример использования DiffHistory:

```jsx static
const OrdersDiffHistory = () => (
	<>
		<OrdersContainer>
			<Flex style={{ height: '100%' }}>
				<OrdersDiffHistoryLeft />
				<OrdersDiffHistoryRight />
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
```

Пример использования DiffHistoryLeft:

```jsx static
const OrdersDiffHistoryLeft = () => (
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
);
```

Пример использования DiffHistoryRight:

```jsx static
const OrdersDiffHistoryRight = (): React$MixedElement => (
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
);
```
