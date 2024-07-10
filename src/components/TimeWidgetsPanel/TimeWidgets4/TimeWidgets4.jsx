// @flow

import React from 'react';

import TimeWidgets4XL from './TimeWidgets4XL/TimeWidgets4XL';
import TimeWidgets4SmToLg from './TimeWidgets4SmToLg/TimeWidgets4SmToLg';

const TimeWidgets4 = (): React$MixedElement => (
	<>
		<TimeWidgets4XL />
		<TimeWidgets4SmToLg />
	</>
);

export default TimeWidgets4;
