// @flow

import React from 'react';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets3Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets3 = ({ fullDate }: ITimeWidgets3Props): React.Node => (
	<div style={{ padding: '10px', border: '1px solid black' }}>
		<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
	</div>
);
