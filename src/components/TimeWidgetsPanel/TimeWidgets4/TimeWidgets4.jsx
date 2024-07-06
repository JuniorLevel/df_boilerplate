// @flow

import React from 'react';
import { Flex } from 'antd';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets4 = (): React$MixedElement => (
	<Flex
		wrap
		style={{ border: '1px solid black', marginBottom: '20px' }}
		gap={5}
	>
		<Flex
			wrap
			gap={10}
			align="center"
			style={{ padding: '5px', fontSize: '2em' }}
		>
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
			<TimeWidgetsWeeksAndYearsPanel />
		</Flex>
		<Flex
			wrap
			gap={10}
			align="center"
			style={{ padding: '5px', fontSize: '2em' }}
		>
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
			<TimeWidgetsWeeksAndYearsPanel />
		</Flex>
	</Flex>
);

export default TimeWidgets4;
