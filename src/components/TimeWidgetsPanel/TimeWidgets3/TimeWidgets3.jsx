// @flow

import React from 'react';
import TimeWidgetsDateWithTimeBlock from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets3Props {
	fullDate: any;
}

const TimeWidgets3 = ({ fullDate }: ITimeWidgets3Props): React$MixedElement => (
	<div style={{ padding: '10px', border: '1px solid black' }}>
		<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
	</div>
);

export default TimeWidgets3;
