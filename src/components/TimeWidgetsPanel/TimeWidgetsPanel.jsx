// @flow

import React from 'react';
import TimeWidgets1 from './TimeWidgets1/TimeWidgets1';
import TimeWidgets2 from './TimeWidgets2/TimeWidgets2';
import TimeWidgets3 from './TimeWidgets3/TimeWidgets3';
import TimeWidgets4 from './TimeWidgets4/TimeWidgets4';
import TimeWidgets5 from './TimeWidgets5/TimeWidgets5';
import TimeWidgets6 from './TimeWidgets6/TimeWidgets6';
import TimeWidgets7 from './TimeWidgets7/TimeWidgets7';
import TextFieldWidget from './TextFieldWidget/TextFieldWidget';
import TimeWidgetsWithTextField1 from './TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import TimeWidgetsWithTextField2 from './TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import TimeWidgetsWithTextField3 from './TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';

const TimeWidgetsPanel = (): React$MixedElement => (
	<div style={{ padding: '10px' }}>
		<TimeWidgets1 />
		<TimeWidgets2 />
		<TimeWidgets3 />
		<TimeWidgets4 />
		<TimeWidgets5 />
		<TimeWidgets6 />
		<TimeWidgets7 />
		<div
			style={{
				marginBottom: '20px',
				border: '1px solid black',
				padding: '10px',
			}}
		>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</div>
		<div style={{ marginBottom: '20px' }}>
			<TimeWidgetsWithTextField1 />
		</div>
		<div style={{ marginBottom: '20px' }}>
			<TimeWidgetsWithTextField2 />
		</div>
		<div style={{ marginBottom: '20px' }}>
			<TimeWidgetsWithTextField3 />
		</div>
	</div>
);

export default TimeWidgetsPanel;
