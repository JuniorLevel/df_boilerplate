// @flow

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Flex, Button, Card } from 'antd';

const FiltersCardAddButton = (): React$MixedElement => (
	<Card
		style={{
			borderRadius: 0,
			borderColor: 'black',
			borderWidth: 3,
			minWidth: 300,
			minHeight: 350,
		}}
	>
		<Flex justify="center" align="center" style={{ height: '350px' }}>
			<Button icon={<PlusOutlined />} />
		</Flex>
	</Card>
);

export default FiltersCardAddButton;
