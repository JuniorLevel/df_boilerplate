// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex } from 'antd';
import { StatusChangedDiv } from '../StatusContainer.styles';

interface IStatusChanged {
	children: React.Node;
	role: string;
}

export const StatusChanged = ({
	children,
	role,
}: IStatusChanged): React$MixedElement => (
	<StatusChangedDiv>
		{role && (
			<Flex
				align="center"
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				{role}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						fontSize: '10px',
					}}
				>
					role
				</div>
			</Flex>
		)}
		<Flex align="center">
			<div
				style={{
					margin: '10px',
					border: '1px solid black',
					borderRadius: '50%',
					padding: '5px',
					fontSize: '10px',
				}}
			>
				FIO
			</div>
			<div>{children}</div>
			<Button
				ghost
				size="large"
				style={{
					border: 'none',
					width: 20,
					position: 'absolute',
					right: 0,
				}}
				icon={<MoreOutlined />}
			/>
		</Flex>
	</StatusChangedDiv>
);
