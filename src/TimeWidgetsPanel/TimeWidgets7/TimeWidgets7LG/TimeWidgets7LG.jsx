// @flow

import { Flex, Progress } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets7LGProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7LG = ({
	fullDate,
}: ITimeWidgets7LGProps): React.Node => (
	<MediaQuery minWidth={710} maxWidth={1164}>
		<Flex
			vertical
			gap={10}
			align="center"
			style={{
				border: '1px solid black',
				marginBottom: '20px',
				padding: '5px',
			}}
		>
			<Flex gap={50}>
				<Flex
					vertical
					justify="center"
					align="center"
					gap={10}
					style={{ padding: '5px' }}
				>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex wrap align="center" gap={10}>
						<Flex wrap gap={10}>
							<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						</Flex>
					</Flex>
				</Flex>
				<Flex vertical gap={10}>
					<TimeWidgetsCustomClock />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
			<Flex style={{ padding: '5px' }}>
				<Progress
					style={{ border: '1px solid black', padding: '5px' }}
					size={{ width: 17, height: 50 }}
					percent={100}
					steps={31}
					showInfo={false}
				/>
			</Flex>
		</Flex>
	</MediaQuery>
);
