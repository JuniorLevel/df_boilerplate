// @flow

import React from 'react';
import TimeWidgets2XL from './TimeWidgets2XL/TimeWidgets2XL';
import TimeWidgets2MD from './TimeWidgets2MD/TimeWidgets2MD';
import TimeWidgets2SM from './TimeWidgets2SM/TimeWidgets2SM';

const TimeWidgets2 = (): React$MixedElement => (
	<>
		<TimeWidgets2XL />
		<TimeWidgets2MD />
		<TimeWidgets2SM />
	</>
);

export default TimeWidgets2;
