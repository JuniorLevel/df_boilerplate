// @flow

import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const FiltersCardAddItemButton = (): React$MixedElement => (
	<Button block icon={<PlusOutlined />} />
);

export default FiltersCardAddItemButton;
