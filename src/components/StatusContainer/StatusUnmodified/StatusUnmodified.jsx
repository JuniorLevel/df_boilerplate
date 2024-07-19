// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex, Badge } from 'antd';
import { StatusUnmodifiedDiv } from '../StatusContainer.styles';

interface IStatusUnmodifiedProps {
	children: React.Node;
	counter: number;
}

const StatusUnmodified = ({
	children,
	counter,
}: IStatusUnmodifiedProps): React$MixedElement => (
	<StatusUnmodifiedDiv>
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
		</Flex>
		<Flex gap={20}>
			{counter > 0 && (
				<Badge
					count={counter}
					color="black"
					style={{ position: 'absolute', top: '9px', right: '-20px' }}
				/>
			)}
			<Button
				ghost
				size="large"
				style={{
					border: 'none',
					width: 20,
				}}
				icon={<MoreOutlined />}
			/>
		</Flex>
	</StatusUnmodifiedDiv>
);

export default StatusUnmodified;
