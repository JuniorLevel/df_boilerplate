// @flow

import React from 'react';
import TimeWidgets5XL from './TimeWidgets5XL/TimeWidgets5XL';
import TimeWidgets5LG from './TimeWidgets5LG/TimeWidgets5LG';
import TimeWidgets5SmToMd from './TimeWidgets5SmToMd/TimeWidgets5SmToMd';

const TimeWidgets5 = (): React$MixedElement => (
	<>
		<TimeWidgets5XL />
		<TimeWidgets5LG />
		<TimeWidgets5SmToMd />
	</>
);

export default TimeWidgets5;
