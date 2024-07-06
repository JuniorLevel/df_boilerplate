// @flow

import React from 'react';
import TimeWidgets1 from './TimeWidgets1/TimeWidgets1';
import TimeWidgets2 from './TimeWidgets2/TimeWidgets2';
import TimeWidgets3 from './TimeWidgets3/TimeWidgets3';
import TimeWidgets4 from './TimeWidgets4/TimeWidgets4';

const TimeWidgetsPanel = (): React$MixedElement => (
	<div style={{ padding: '10px' }}>
		<TimeWidgets1 />
		<TimeWidgets2 />
		<TimeWidgets3 />
		<TimeWidgets4 />
	</div>
);

export default TimeWidgetsPanel;
