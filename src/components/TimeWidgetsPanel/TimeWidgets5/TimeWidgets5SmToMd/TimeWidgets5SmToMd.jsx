// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets5SmToMd = (): React$MixedElement => (
	<MediaQuery maxWidth={1375}>
		<Flex
			wrap
			gap={10}
			justify="space-evenly"
			style={{ border: '1px solid black', marginBottom: '20px' }}
		>
			<Flex
				vertical
				gap={10}
				align="center"
				style={{ padding: '5px', fontSize: '2em' }}
			>
				<Flex vertical gap={10} wrap justify="center">
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
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
			<Flex
				vertical
				gap={10}
				align="center"
				style={{ padding: '5px', fontSize: '2em' }}
			>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex vertical gap={10} style={{ order: -1 }} wrap justify="center">
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
							09
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
		</Flex>
	</MediaQuery>
);

export default TimeWidgets5SmToMd;
