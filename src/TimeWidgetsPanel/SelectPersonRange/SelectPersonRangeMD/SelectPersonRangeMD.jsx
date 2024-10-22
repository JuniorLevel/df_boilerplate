// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { SelectAndPerson } from '../../SelectAndPerson/SelectAndPerson';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './SelectPersonRangeMD.module.scss';

interface ISelectPersonRangeMDProps {
	fullDate: { date: string, time: string };
	userRole: string;
	fio: string;
}

export const SelectPersonRangeMD = ({
	fullDate,
	userRole,
	fio,
}: ISelectPersonRangeMDProps): React.Node => (
	<MediaQuery minWidth={640} maxWidth={829}>
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
			<Flex vertical align="center" gap={10}>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={50} align="center">
					<TimeWidgetsCustomClock />
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			</Flex>
		</Flex>
	</MediaQuery>
);
