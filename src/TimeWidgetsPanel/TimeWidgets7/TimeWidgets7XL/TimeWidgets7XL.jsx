// @flow
import { Flex, Progress } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets7XL.module.scss';

interface ITimeWidgets7XLProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7XL = ({
	fullDate,
}: ITimeWidgets7XLProps): React.Node => (
	<MediaQuery minWidth={1165} maxWidth={1399}>
		<Flex justify="space-between" align="center" className={styles.container}>
			<Flex gap={50}>
				<Flex vertical justify="center" gap={10}>
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
			<Flex className={styles.progress}>
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
