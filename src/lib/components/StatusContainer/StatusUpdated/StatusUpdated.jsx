// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex, Badge } from 'antd';
import {
	StatusUpdatedDiv,
	StyledButtonCloseCircle,
	StyledButtonCheckCircle,
} from '../StatusContainer.styles';

interface IStatusUpdatedProps {
	children: React.Node;
	counter: number;
}

const StatusUpdated = ({
	children,
	counter,
}: IStatusUpdatedProps): React$MixedElement => (
	<StatusUpdatedDiv>
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
			<StyledButtonCloseCircle
				ghost
				size="large"
				icon={<CloseCircleOutlined />}
			/>
			<StyledButtonCheckCircle
				ghost
				size="large"
				icon={<CheckCircleOutlined />}
			/>
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
	</StatusUpdatedDiv>
);

export default StatusUpdated;
