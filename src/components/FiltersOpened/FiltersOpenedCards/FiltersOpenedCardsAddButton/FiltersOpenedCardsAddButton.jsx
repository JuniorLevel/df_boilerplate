// @flow

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import {
	StyledCardsAddButtonMobile,
	StyledCardsAddButtonDesktop,
} from './FiltersOpenedCardsAddButton.styles';

const FiltersOpenedCardsAddButton = (): React$MixedElement => (
	<>
		<MediaQuery maxWidth={360}>
			<StyledCardsAddButtonMobile>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} />
				</Flex>
			</StyledCardsAddButtonMobile>
		</MediaQuery>
		<MediaQuery minWidth={361}>
			<StyledCardsAddButtonDesktop>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} />
				</Flex>
			</StyledCardsAddButtonDesktop>
		</MediaQuery>
	</>
);

export default FiltersOpenedCardsAddButton;
