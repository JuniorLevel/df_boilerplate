// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import PersonWidget from '../../PersonWidget/PersonWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithPersonSMProps {
	fullDate: string;
	userRole: string;
	fio: string;
}

const TimeWidgetsWithPersonSM = ({
	fullDate,
	userRole,
	fio,
}: ITimeWidgetsWithPersonSMProps): React$MixedElement => (
	<MediaQuery maxWidth={569}>
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
				gap={10}
				style={{
					padding: '5px',
				}}
			>
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

export default TimeWidgetsWithPersonSM;
