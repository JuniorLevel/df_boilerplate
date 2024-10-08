// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

const StyledDivYears = styled.div`
	background-color: blue;
`;

interface ITimeWidgets6SmToLgProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets6SmToLg = ({
	fullDate,
}: ITimeWidgets6SmToLgProps): React.Node => (
	<MediaQuery maxWidth={853}>
		<Flex
			vertical
			gap={10}
			align="center"
			style={{ border: '1px solid black', marginBottom: '20px' }}
		>
			<Flex wrap align="center" style={{ padding: '5px' }}>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
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
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
