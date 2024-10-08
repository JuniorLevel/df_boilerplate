// @flow

import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';

const StyledProgress = styled(Progress)`
	background-color: blue;
	border-radius: 50%;
	border: 1px solid black;
	svg {
		circle {
			stroke-linecap: butt;
			stroke-width: 90%;
		}
	}
`;

export const TimeWidgetsCustomClock = (): React.Node => (
	<StyledProgress
		type="circle"
		strokeWidth={10}
		strokeColor="white"
		percent={60}
		size={75}
		showInfo={false}
	/>
);
