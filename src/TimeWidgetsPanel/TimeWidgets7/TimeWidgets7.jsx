// @flow

import React from 'react';
import { Flex, Progress } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgets7XL } from './TimeWidgets7XL/TimeWidgets7XL';
import { TimeWidgets7LG } from './TimeWidgets7LG/TimeWidgets7LG';
import { TimeWidgets7MD } from './TimeWidgets7MD/TimeWidgets7MD';
import { TimeWidgets7SM } from './TimeWidgets7SM/TimeWidgets7SM';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets7Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7 = ({ fullDate }: ITimeWidgets7Props): React.Node => (
	<>
		<MediaQuery minWidth={1400}>
			<Flex
				justify="space-between"
				align="center"
				style={{ border: '1px solid black', marginBottom: '20px' }}
			>
				<Flex align="center" gap={35} style={{ padding: '5px' }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex
					style={{
						border: '1px solid black',
						padding: '5px',
						margin: '0 50px',
					}}
				>
					<Progress
						size={{ width: 10, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
				<Flex
					align="center"
					gap={35}
					style={{ padding: '5px', fontSize: '2em' }}
				>
					<Flex gap={10} style={{ order: 2 }}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<Flex>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets7XL fullDate={fullDate} />
		<TimeWidgets7LG fullDate={fullDate} />
		<TimeWidgets7MD fullDate={fullDate} />
		<TimeWidgets7SM fullDate={fullDate} />
	</>
);
