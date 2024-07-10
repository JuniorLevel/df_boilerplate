// @flow

import React from 'react';
import TimeWidgets72XL from './TimeWidgets72XL/TimeWidgets72XL';
import TimeWidgets7XL from './TimeWidgets7XL/TimeWidgets7XL';
import TimeWidgets7LG from './TimeWidgets7LG/TimeWidgets7LG';
import TimeWidgets7MD from './TimeWidgets7MD/TimeWidgets7MD';
import TimeWidgets7SM from './TimeWidgets7SM/TimeWidgets7SM';

const TimeWidgets7 = (): React$MixedElement => (
	<>
		<TimeWidgets72XL />
		<TimeWidgets7XL />
		<TimeWidgets7LG />
		<TimeWidgets7MD />
		<TimeWidgets7SM />
	</>
);

export default TimeWidgets7;
