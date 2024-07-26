// @flow

import React from 'react';
import { Button } from 'antd';

interface IWelcomeButtonProps {
	title: string;
	onClick: () => {};
}

export const WelcomeButton = ({
	title,
	onClick,
}: IWelcomeButtonProps): React$MixedElement => (
	<Button type="primary" shape="circle" onClick={onClick}>
		{title}
	</Button>
);
