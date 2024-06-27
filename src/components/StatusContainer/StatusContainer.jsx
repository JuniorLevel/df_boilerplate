// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex } from 'antd';
import {
	StatusProvider,
	StatusContext,
} from '../../context/StatusContainerContext/StatusContainerContext';
import {
	StatusChangedDiv,
	StatusUpdatedDiv,
	StyledButtonCloseCircle,
	StyledButtonCheckCircle,
} from './StatusContainer.styles';

interface IStatusContainer {
	children: React.Node;
}

const StatusContainer = ({
	children,
}: IStatusContainer): React$MixedElement => (
	<StatusProvider>
		<StatusContext.Consumer>
			{({ status }) => (
				<>
					{status === 'changed' && (
						<StatusChangedDiv>{children}</StatusChangedDiv>
					)}
					{status === 'updated' && (
						<StatusUpdatedDiv>
							<div>{children}</div>
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
					)}
				</>
			)}
		</StatusContext.Consumer>
	</StatusProvider>
);

export default StatusContainer;
