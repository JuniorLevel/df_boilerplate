// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import { SelectAndPerson } from '../../SelectAndPerson/SelectAndPerson';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './SelectPersonRangeLG.module.scss';

interface ISelectPersonRangeLGProps {
	fullDate: { date: string, time: string };
	userRole: string;
	fio: string;
}

export const SelectPersonRangeLG = ({
	fullDate,
	userRole,
	fio,
}: ISelectPersonRangeLGProps): React.Node => (
	<MediaQuery minWidth={830} maxWidth={1284}>
		<Flex
			wrap
			gap={10}
			align="center"
			justify="center"
			className={styles.container}
		>
			<div className={styles.selectAndPerson}>
				<SelectAndPerson userRole={userRole} fio={fio} />
			</div>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			<Flex gap={10} align="center">
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
		</Flex>
	</MediaQuery>
);
