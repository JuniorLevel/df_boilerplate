// @flow

import React from 'react';
import styled from 'styled-components';
import { SelectPersonRange } from './SelectPersonRange/SelectPersonRange';
import { TextWidget } from './TextWidget/TextWidget';
import { TimeWidgets1 } from './TimeWidgets1/TimeWidgets1';
import { TimeWidgets2 } from './TimeWidgets2/TimeWidgets2';
import { TimeWidgets3 } from './TimeWidgets3/TimeWidgets3';
import { TimeWidgets4 } from './TimeWidgets4/TimeWidgets4';
import { TimeWidgets5 } from './TimeWidgets5/TimeWidgets5';
import { TimeWidgets6 } from './TimeWidgets6/TimeWidgets6';
import { TimeWidgets7 } from './TimeWidgets7/TimeWidgets7';
import { TextTimeRange1 } from './TextTimeRange1/TextTimeRange1';
import { TextTimeRange2 } from './TextTimeRange2/TextTimeRange2';
import { TextTimeRange3 } from './TextTimeRange3/TextTimeRange3';
import { SelectAndPerson } from './SelectAndPerson/SelectAndPerson';

const StyledDiv = styled.div`
	padding: 10px;
	> div {
		margin-bottom: 20px;
	}
`;

export const TimeWidgetsPanel = (): React.Node => (
	<StyledDiv>
		<TimeWidgets1 date="13 августа 1999" />
		<TimeWidgets2 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets3 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets4 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets5 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets6 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets7 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<div>
			<TextWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</div>
		<TextTimeRange1
			text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<TextTimeRange2
			text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<TextTimeRange3
			text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<SelectAndPerson userRole="Assigned" fio="FIO FIO FIO FIO" />
		<SelectPersonRange
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
			userRole="Assigned"
			fio="FIO FIO FIO FIO"
		/>
	</StyledDiv>
);
