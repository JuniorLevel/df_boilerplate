// @flow

import React from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';

interface ILogoProps {
	title: string;
}

export const Logo = ({ title }: ILogoProps): React.Node => (
	<div>
		<span>
			<OpenAIOutlined />
		</span>
		<span>{title}</span>
	</div>
);
