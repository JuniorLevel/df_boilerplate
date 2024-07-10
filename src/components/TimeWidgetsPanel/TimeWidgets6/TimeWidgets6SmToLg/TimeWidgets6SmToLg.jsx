// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const StyledDivYears = styled.div`
	background-color: blue;
`;

const TimeWidgets6SmToLg = (): React$MixedElement => (
	<MediaQuery maxWidth={1153}>
		<Flex
			vertical
			gap={10}
			align="center"
			style={{ border: '1px solid black', marginBottom: '20px' }}
		>
			<Flex wrap align="center" style={{ padding: '5px', fontSize: '2em' }}>
				<Flex wrap gap={10} justify="center">
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
			</Flex>
			<Flex style={{ padding: '5px', border: '1px solid black' }}>
				<Flex gap={10}>
					<StyledDivYears
						style={{
							width: '30px',
							height: '30px',
							border: '1px solid black',
						}}
					/>
					<StyledDivYears
						style={{
							width: '30px',
							height: '30px',
							border: '1px solid black',
						}}
					/>
					<StyledDivYears
						style={{
							width: '30px',
							height: '30px',
							border: '1px solid black',
						}}
					/>
				</Flex>
			</Flex>
			<Flex wrap align="center" style={{ padding: '5px', fontSize: '2em' }}>
				<Flex wrap gap={10} justify="center">
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
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgets6SmToLg;
