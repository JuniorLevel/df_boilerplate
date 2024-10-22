// @flow

import { Flex, Progress } from 'antd';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets2SM.module.scss';

interface ITimeWidgets2SMProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets2SM = ({
	fullDate,
}: ITimeWidgets2SMProps): React.Node => {
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery maxWidth={781}>
			<Flex
				wrap
				align="start"
				justify="center"
				className={styles.container}
				gap={5}
			>
				<div>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</div>
				<Flex>
					<Flex vertical align="center" gap={10}>
						<div className={styles.panel}>
							{isShowWeeksPanel ? (
								<TimeWidgetsWeeksAndYearsPanel />
							) : (
								<Progress
									size={{ width: 6, height: 50 }}
									percent={100}
									steps={31}
									showInfo={false}
								/>
							)}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
