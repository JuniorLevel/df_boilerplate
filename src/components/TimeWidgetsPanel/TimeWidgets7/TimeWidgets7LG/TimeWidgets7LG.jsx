// @flow

import { Flex, Progress } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidget7LG = (): React$MixedElement => (
	<MediaQuery minWidth={710} maxWidth={1350}>
		<Flex
			vertical
			gap={10}
			style={{
				border: '1px solid black',
				marginBottom: '20px',
				padding: '5px',
			}}
		>
			<Flex gap={50}>
				<Flex
					vertical
					justify="center"
					align="center"
					gap={10}
					style={{ padding: '5px', fontSize: '2em' }}
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
					<Flex wrap align="center" gap={10}>
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
				</Flex>
				<Flex vertical gap={10}>
					<TimeWidgetsCustomClock />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
			<Flex style={{ padding: '5px' }}>
				<Progress
					style={{ border: '1px solid black', padding: '5px' }}
					size={{ width: 17, height: 50 }}
					percent={100}
					steps={31}
					showInfo={false}
				/>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidget7LG;
