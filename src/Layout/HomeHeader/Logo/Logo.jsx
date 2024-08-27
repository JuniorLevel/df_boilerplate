// @flow

import React from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';

interface ILogoProps {
	title: string;
}

export const Logo = ({ title }: ILogoProps): React$MixedElement => (
	<div style={{ fontSize: '2em' }}>
		<span>
			<OpenAIOutlined />
		</span>
		<span>{title}</span>
	</div>
);
