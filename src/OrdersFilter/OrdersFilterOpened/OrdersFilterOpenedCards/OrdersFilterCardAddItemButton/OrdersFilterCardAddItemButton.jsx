// @flow

import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface IOrdersFilterCardAddItemButtonProps {
	onClick: () => any;
}

export const OrdersFilterCardAddItemButton = ({
	onClick,
}: IOrdersFilterCardAddItemButtonProps): React$MixedElement => (
	<Button block icon={<PlusOutlined />} onClick={onClick} />
);
