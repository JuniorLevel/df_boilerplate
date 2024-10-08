// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { SelectAndPerson } from '../../SelectAndPerson/SelectAndPerson';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

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
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ flex: '1 0 50%' }}>
				<SelectAndPerson userRole={userRole} fio={fio} />
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
