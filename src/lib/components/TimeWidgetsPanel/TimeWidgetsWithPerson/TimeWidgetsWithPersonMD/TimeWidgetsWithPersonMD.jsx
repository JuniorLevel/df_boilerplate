// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import PersonWidget from '../../PersonWidget/PersonWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithPersonMDProps {
	fullDate: string;
	userRole: string;
	fio: string;
}

const TimeWidgetsWithPersonMD = ({
	fullDate,
	userRole,
	fio,
}: ITimeWidgetsWithPersonMDProps): React$MixedElement => (
	<MediaQuery minWidth={570} maxWidth={829}>
		<Flex
			wrap
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ width: '100%' }}>
				<PersonWidget userRole={userRole} fio={fio} />
			</div>
			<Flex
				vertical
				align="center"
				gap={10}
				style={{
					padding: '5px',
				}}
			>
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

export default TimeWidgetsWithPersonMD;
