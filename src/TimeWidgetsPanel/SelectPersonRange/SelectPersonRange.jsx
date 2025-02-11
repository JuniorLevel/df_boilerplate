// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { SelectPersonRangeLG } from './SelectPersonRangeLG/SelectPersonRangeLG';
import { SelectPersonRangeMD } from './SelectPersonRangeMD/SelectPersonRangeMD';
import { SelectPersonRangeSM } from './SelectPersonRangeSM/SelectPersonRangeSM';
import { SelectAndPerson } from '../SelectAndPerson/SelectAndPerson';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './SelectPersonRange.module.scss';

interface ISelectPersonRangeProps {
	fullDate: { date: string, time: string };
	userRole: string;
	fio: string;
}

export const SelectPersonRange = ({
	fullDate,
	userRole,
	fio,
}: ISelectPersonRangeProps): React.Node => (
	<>
		<MediaQuery minWidth={1285}>
			<Flex gap={10} align="center" className={styles.container}>
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
		<SelectPersonRangeLG fullDate={fullDate} userRole={userRole} fio={fio} />
		<SelectPersonRangeMD fullDate={fullDate} userRole={userRole} fio={fio} />
		<SelectPersonRangeSM fullDate={fullDate} userRole={userRole} fio={fio} />
	</>
);
