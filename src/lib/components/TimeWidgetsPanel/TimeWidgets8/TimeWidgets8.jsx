// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Progress } from 'antd';
import { TimeWidgets8LG } from './TimeWidgets8LG/TimeWidgets8LG';
import { TimeWidgets8MD } from './TimeWidgets8MD/TimeWidgets8MD';
import { TimeWidgets8SM } from './TimeWidgets8SM/TimeWidgets8SM';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITimeWidgets8Props {
	fullDate: any;
}

export const TimeWidgets8 = ({
	fullDate,
}: ITimeWidgets8Props): React$MixedElement => (
	<>
		<MediaQuery minWidth={1425}>
			<Flex justify="space-between" align="center">
				<Flex align="center" gap={50} style={{ padding: '5px' }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex>
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
					<Progress
						size={{ width: 10, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
				<Flex align="center" gap={50} style={{ padding: '5px' }}>
					<Flex gap={10} style={{ order: 2 }}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<Flex>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets8LG fullDate={fullDate} />
		<TimeWidgets8MD fullDate={fullDate} />
		<TimeWidgets8SM fullDate={fullDate} />
	</>
);
