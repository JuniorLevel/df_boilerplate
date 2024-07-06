// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex, Badge } from 'antd';
import {
	StatusProvider,
	StatusContext,
} from '../../context/StatusContainerContext/StatusContainerContext';
import {
	StatusChangedDiv,
	StatusUpdatedDiv,
	StyledButtonCloseCircle,
	StyledButtonCheckCircle,
	StatusUnmodifiedDiv,
} from './StatusContainer.styles';

interface IStatusContainer {
	children: React.Node;
}

const StatusContainer = ({
	children,
}: IStatusContainer): React$MixedElement => (
	<StatusProvider>
		<StatusContext.Consumer>
			{({ status, counter, role }) => (
				<div>
					{status === 'unmodified' && (
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
					)}
					{status === 'changed' && (
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
					)}
					{status === 'updated' && (
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
					)}
				</div>
			)}
		</StatusContext.Consumer>
	</StatusProvider>
);

export default StatusContainer;
