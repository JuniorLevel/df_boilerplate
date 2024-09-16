// @flow

import React, { useContext } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from '@tanstack/react-router';
import { OrdersFilterContext } from '../../../../context/OrdersFilterContext/OrdersFilterContext';

interface IOrdersFilterCardAddItemDialogButtonProps {
	cardItem: any[];
}

export const OrdersFilterCardAddItemDialogButton = ({
	cardItem,
}: IOrdersFilterCardAddItemDialogButtonProps): React.Node => {
	const { setOrdersFilterItems } = useContext(OrdersFilterContext);

	const navigate = useNavigate();

	const addFilterItem = () => {
		navigate({ to: '/dialog' });
		setOrdersFilterItems([...cardItem]);
	};

	return <Button block icon={<PlusOutlined />} onClick={addFilterItem} />;
};
