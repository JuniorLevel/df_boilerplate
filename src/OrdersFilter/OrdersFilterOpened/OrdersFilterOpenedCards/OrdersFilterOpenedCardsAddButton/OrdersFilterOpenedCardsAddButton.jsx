// @flow

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import {
	StyledCardsAddButtonMobile,
	StyledCardsAddButtonDesktop,
} from './OrdersFilterOpenedCardsAddButton.styles';

interface IOrdersFilterOpenedCardsAddButtonProps {
	onClick: () => any;
}

export const OrdersFilterOpenedCardsAddButton = ({
	onClick,
}: IOrdersFilterOpenedCardsAddButtonProps): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<StyledCardsAddButtonDesktop>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} onClick={onClick} />
				</Flex>
			</StyledCardsAddButtonDesktop>
		</MediaQuery>
		<MediaQuery maxWidth={360}>
			<StyledCardsAddButtonMobile>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} onClick={onClick} />
				</Flex>
			</StyledCardsAddButtonMobile>
		</MediaQuery>
	</>
);
