// @flow

import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';
import Image from '../../../assets/volna-709095203.png';

const StyledProgress = styled(Progress)`
	background: url(${Image}) no-repeat center/cover;
	border-radius: 50%;
	border: 1px solid black;
	svg {
		circle {
			stroke-linecap: butt;
			stroke-width: 90%;
		}
	}
`;

const TimeWidgetsCustomClock = (): React$MixedElement => (
	<StyledProgress
		type="circle"
		strokeWidth={10}
		strokeColor="rgba(255, 0, 0, 0.3)"
		percent={90}
		size={90}
		showInfo={false}
	/>
);

export default TimeWidgetsCustomClock;
