// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';

import React from 'react';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets4XL = (): React$MixedElement => (
	<MediaQuery minWidth={1376}>
		<Flex
			wrap
			justify="space-between"
			style={{ border: '1px solid black', marginBottom: '20px' }}
		>
			<Flex
				wrap
				gap={10}
				align="center"
				justify="space-between"
				style={{ padding: '5px', fontSize: '2em', flex: '0 1 50%' }}
			>
				<Flex wrap gap={10}>
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
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
			<Flex
				wrap
				gap={10}
				align="center"
				justify="space-between"
				style={{ padding: '5px', fontSize: '2em', flex: '0 1 50%' }}
			>
				<TimeWidgetsWeeksAndYearsPanel />
				<Flex wrap gap={10}>
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

export default TimeWidgets4XL;
