// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import TimeWidgetsWithPersonLG from './TimeWidgetsWithPersonLG/TimeWidgetsWithPersonLG';
import TimeWidgetsWithPersonMD from './TimeWidgetsWithPersonMD/TimeWidgetsWithPersonMD';
import TimeWidgetsWithPersonSM from './TimeWidgetsWithPersonSM/TimeWidgetsWithPersonSM';
import PersonWidget from '../PersonWidget/PersonWidget';
import TimeWidgetsCustomClock from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithPersonProps {
	fullDate: any;
	userRole: string;
	fio: string;
}

const TimeWidgetsWithPerson = ({
	fullDate,
	userRole,
	fio,
}: ITimeWidgetsWithPersonProps): React$MixedElement => (
	<>
		<MediaQuery minWidth={1285}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<div style={{ width: '100%' }}>
					<PersonWidget userRole={userRole} fio={fio} />
				</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgetsWithPersonLG
			fullDate={fullDate}
			userRole={userRole}
			fio={fio}
		/>
		<TimeWidgetsWithPersonMD
			fullDate={fullDate}
			userRole={userRole}
			fio={fio}
		/>
		<TimeWidgetsWithPersonSM
			fullDate={fullDate}
			userRole={userRole}
			fio={fio}
		/>
	</>
);

export default TimeWidgetsWithPerson;
