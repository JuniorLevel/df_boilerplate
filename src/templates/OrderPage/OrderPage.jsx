// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import OrdersList from '../../components/OrdersList/OrdersList';
import { buttons } from '../../components/Container/buttons';

const OrderPage = (): React$MixedElement => (
	<Container
		buttons={buttons}
		title="Caption"
		theme="dark"
		avatar={{ title: 'AV' }}
	>
		<OrdersList />
	</Container>
);

export default OrderPage;
