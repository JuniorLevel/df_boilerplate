// @flow

import React from 'react';

import TimeWidgets8XL from './TimeWidgets8XL/TimeWidgets8XL';
import TimeWidgets8LG from './TimeWidgets8LG/TimeWidgets8LG';
import TimeWidgets8MD from './TimeWidgets8MD/TimeWidgets8MD';
import TimeWidgets8SM from './TimeWidgets8SM/TimeWidgets8SM';

const TimeWidgets8 = (): React$MixedElement => (
	<>
		<TimeWidgets8XL />
		<TimeWidgets8LG />
		<TimeWidgets8MD />
		<TimeWidgets8SM />
	</>
);

export default TimeWidgets8;
