// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import { buttons } from '../../components/Container/buttons';
import { tabs } from '../../components/OrderTabs/OrderTabsItems/OrderTabsItems';
import OrderTabs from '../../components/OrderTabs/OrderTabs';

const OrderPage = (): React$MixedElement => (
	<Container
		buttons={buttons}
		title="Caption"
		theme="light"
		avatar={{ title: 'AV' }}
	>
		<OrderTabs tabs={tabs} />
	</Container>
);

export default OrderPage;
