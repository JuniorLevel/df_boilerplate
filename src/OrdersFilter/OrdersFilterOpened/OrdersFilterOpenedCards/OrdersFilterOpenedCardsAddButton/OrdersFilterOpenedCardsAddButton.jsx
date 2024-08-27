// @flow

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import {
	StyledCardsAddButtonMobile,
	StyledCardsAddButtonDesktop,
} from './OrdersFilterOpenedCardsAddButton.styles';

export const OrdersFilterOpenedCardsAddButton = (): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<StyledCardsAddButtonDesktop>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} />
				</Flex>
			</StyledCardsAddButtonDesktop>
		</MediaQuery>
		<MediaQuery maxWidth={360}>
			<StyledCardsAddButtonMobile>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} />
				</Flex>
			</StyledCardsAddButtonMobile>
		</MediaQuery>
	</>
);
