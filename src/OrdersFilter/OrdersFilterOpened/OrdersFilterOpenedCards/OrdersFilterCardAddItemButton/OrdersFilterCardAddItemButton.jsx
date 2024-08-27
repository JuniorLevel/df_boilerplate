// @flow

import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const OrdersFilterCardAddItemButton = (): React$MixedElement => (
	<Button block icon={<PlusOutlined />} />
);
