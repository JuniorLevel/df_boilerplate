// @flow

import React from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const StyledDivYears = styled.div`
	background-color: blue;
`;

const TimeWidgets6XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={854}>
			<Flex
				wrap
				justify="space-between"
				align="center"
				style={{ border: '1px solid black', marginBottom: '20px' }}
			>
				<Flex wrap align="center" style={{ padding: '5px' }}>
					<Flex wrap gap={10}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
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
				<Flex wrap align="center" style={{ padding: '5px' }}>
					<Flex wrap gap={10}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets6XL;
