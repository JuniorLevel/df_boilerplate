// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import { PersonWidget } from '../../PersonWidget/PersonWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithPersonLGProps {
	fullDate: string;
	userRole: string;
	fio: string;
}

export const TimeWidgetsWithPersonLG = ({
	fullDate,
	userRole,
	fio,
}: ITimeWidgetsWithPersonLGProps): React$MixedElement => (
	<MediaQuery minWidth={830} maxWidth={1284}>
		<Flex
			wrap
			gap={10}
			align="center"
			justify="center"
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<div style={{ width: '100%', alignSelf: 'stretch' }}>
				<PersonWidget userRole={userRole} fio={fio} />
			</div>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			<Flex gap={10} align="center">
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
		</Flex>
	</MediaQuery>
);
