// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Progress } from 'antd';
import { TimeWidgets8LG } from './TimeWidgets8LG/TimeWidgets8LG';
import { TimeWidgets8MD } from './TimeWidgets8MD/TimeWidgets8MD';
import { TimeWidgets8SM } from './TimeWidgets8SM/TimeWidgets8SM';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import styles from './TimeWidgets8.module.scss';

interface ITimeWidgets8Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets8 = ({ fullDate }: ITimeWidgets8Props): React.Node => (
	<>
		<MediaQuery minWidth={1490}>
			<Flex justify="space-between" align="center">
				<Flex align="center" gap={50}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
				<Flex className={styles.progress}>
					<Progress
						size={{ width: 10, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
				<Flex align="center" gap={50}>
					<Flex gap={10} className={styles.dateWithTimeBlock}>
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
