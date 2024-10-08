// @flow
import React from 'react';
import { Flex } from 'antd';

interface IWelcomeAuthButtonsProps {
	children: React.Node;
}

export const WelcomeAuthButtons = ({
	children,
}: IWelcomeAuthButtonsProps): React.Node => (
	<Flex wrap gap="large" justify="center" style={{ marginBottom: '20px' }}>
		{children}
	</Flex>
);
