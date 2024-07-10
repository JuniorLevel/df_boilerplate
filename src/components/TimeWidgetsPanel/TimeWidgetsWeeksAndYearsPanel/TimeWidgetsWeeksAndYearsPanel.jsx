// @flow

import React from 'react';
import { Flex } from 'antd';
import styled from 'styled-components';

const StyledDivWeeks = styled.div`
	background-color: aqua;
`;

const StyledDivYears = styled.div`
	background-color: blue;
`;

const TimeWidgetsWeeksAndYearsPanel = (): React$MixedElement => (
	<div style={{ padding: '5px', border: '1px solid black' }}>
		<Flex gap={10}>
			<StyledDivWeeks
				style={{ width: '30px', height: '30px', border: '1px solid black' }}
			/>
			<StyledDivWeeks
				style={{ width: '30px', height: '30px', border: '1px solid black' }}
			/>
			<StyledDivYears
				style={{ width: '30px', height: '30px', border: '1px solid black' }}
			/>
			<StyledDivYears
				style={{ width: '30px', height: '30px', border: '1px solid black' }}
			/>
		</Flex>
	</div>
);

export default TimeWidgetsWeeksAndYearsPanel;
