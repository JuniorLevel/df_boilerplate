// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets8LGProps {
	fullDate: any;
}

export const TimeWidgets8LG = ({
	fullDate,
}: ITimeWidgets8LGProps): React$MixedElement => (
	<MediaQuery minWidth={1585} maxWidth={1423}>
		<Flex
			justify="space-between"
			align="center"
			style={{
				border: '1px solid black',
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
					margin: '0 50px',
				}}
			>
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
		</Flex>
	</MediaQuery>
);
