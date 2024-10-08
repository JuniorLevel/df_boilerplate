// @flow
import { Flex, Progress } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets7XLProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7XL = ({
	fullDate,
}: ITimeWidgets7XLProps): React.Node => (
	<MediaQuery minWidth={1165} maxWidth={1399}>
		<Flex
			justify="space-between"
			align="center"
			style={{
				border: '1px solid black',
				marginBottom: '20px',
				padding: '5px',
			}}
		>
			<Flex gap={50}>
				<Flex vertical justify="center" gap={10} style={{ padding: '5px' }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex wrap align="center" gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
				<Flex vertical gap={10}>
					<TimeWidgetsCustomClock />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
			<Flex
				style={{
					border: '1px solid black',
					padding: '5px',
					margin: '0 30px',
				}}
			>
				<Progress
					size={{ width: 15.5, height: 50 }}
					percent={100}
					steps={31}
					showInfo={false}
				/>
			</Flex>
		</Flex>
	</MediaQuery>
);
