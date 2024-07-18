// @flow

import React from 'react';
import TimeWidgetsWithPersonXL from './TimeWidgetsWithPersonXL/TimeWidgetsWithPersonXL';
import TimeWidgetsWithPersonLG from './TimeWidgetsWithPersonLG/TimeWidgetsWithPersonLG';
import TimeWidgetsWithPersonMD from './TimeWidgetsWithPersonMD/TimeWidgetsWithPersonMD';
import TimeWidgetsWithPersonSM from './TimeWidgetsWithPersonSM/TimeWidgetsWithPersonSM';

const TimeWidgetsWithPerson = (): React$MixedElement => (
	<>
		<TimeWidgetsWithPersonXL />
		<TimeWidgetsWithPersonLG />
		<TimeWidgetsWithPersonMD />
		<TimeWidgetsWithPersonSM />
	</>
);

export default TimeWidgetsWithPerson;
