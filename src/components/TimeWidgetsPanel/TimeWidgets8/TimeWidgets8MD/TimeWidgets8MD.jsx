// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets8MD = (): React$MixedElement => (
	<MediaQuery minWidth={968} maxWidth={1584}>
		<Flex
			vertical
			align="center"
			gap={10}
			style={{
				border: '1px solid black',
				padding: '5px',
				fontSize: '2em',
			}}
		>
			<Flex gap={10}>
				<Flex gap={10}>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						13
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						08
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						99
					</span>
				</Flex>
				<Flex gap={10}>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						20
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						55
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						55
					</span>
				</Flex>
			</Flex>
			<Flex gap={50} align="center">
				<TimeWidgetsCustomClock />
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
			<Flex gap={10}>
				<Flex gap={10}>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						23
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						08
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						99
					</span>
				</Flex>
				<Flex gap={10}>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						20
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						55
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						55
					</span>
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgets8MD;
