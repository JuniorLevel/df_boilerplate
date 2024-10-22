// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { SelectAndPerson } from '../../SelectAndPerson/SelectAndPerson';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './SelectPersonRangeSM.module.scss';

interface ISelectPersonRangeSMProps {
	fullDate: { date: string, time: string };
	userRole: string;
	fio: string;
}

export const SelectPersonRangeSM = ({
	fullDate,
	userRole,
	fio,
}: ISelectPersonRangeSMProps): React.Node => (
	<MediaQuery maxWidth={639}>
		<Flex
			wrap
			align="center"
			gap={20}
			className={styles.container}
			justify="center"
		>
			<div className={styles.selectAndPerson}>
				<SelectAndPerson userRole={userRole} fio={fio} />
			</div>
			<Flex vertical gap={10}>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
