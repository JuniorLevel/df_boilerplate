// @flow

import React from 'react';
import { Button } from 'antd';

interface IWelcomeButtonProps {
	title: string;
	onClick: () => void;
}

export const WelcomeButton = ({
	title,
	onClick,
}: IWelcomeButtonProps): React.Node => (
	<Button type="primary" shape="circle" onClick={onClick}>
		{title}
	</Button>
);
