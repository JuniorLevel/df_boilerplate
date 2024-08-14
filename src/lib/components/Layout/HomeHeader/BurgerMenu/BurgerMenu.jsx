// @flow

import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { Button } from 'antd';
import React from 'react';

export const BurgerMenu = (): React$MixedElement => (
	<Button ghost icon={<MenuOutlined />} />
);
