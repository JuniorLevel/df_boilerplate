// @flow

import React from 'react';
import styled from 'styled-components';
import { TimeWidgetsWithPerson } from './TimeWidgetsWithPerson/TimeWidgetsWithPerson';
import { TextFieldWidget } from './TextFieldWidget/TextFieldWidget';
import { TimeWidgets1 } from './TimeWidgets1/TimeWidgets1';
import { TimeWidgets2 } from './TimeWidgets2/TimeWidgets2';
import { TimeWidgets3 } from './TimeWidgets3/TimeWidgets3';
import { TimeWidgets4 } from './TimeWidgets4/TimeWidgets4';
import { TimeWidgets5 } from './TimeWidgets5/TimeWidgets5';
import { TimeWidgets6 } from './TimeWidgets6/TimeWidgets6';
import { TimeWidgets7 } from './TimeWidgets7/TimeWidgets7';
import { TimeWidgetsWithTextField1 } from './TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import { TimeWidgetsWithTextField2 } from './TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import { TimeWidgetsWithTextField3 } from './TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';
import { PersonWidget } from './PersonWidget/PersonWidget';

const StyledDiv = styled.div`
	padding: 10px;
	> div {
		margin-bottom: 20px;
	}
`;

export const TimeWidgetsPanel = (): React$MixedElement => (
	<StyledDiv>
		<TimeWidgets1 date="13 августа 1999" />
		<TimeWidgets2 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets3 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets4 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets5 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets6 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TimeWidgets7 fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		<TimeWidgetsWithTextField1
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<TimeWidgetsWithTextField2
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<TimeWidgetsWithTextField3
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<PersonWidget userRole="Assigned" fio="FIO FIO FIO FIO" />
		<TimeWidgetsWithPerson
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
			userRole="Assigned"
			fio="FIO FIO FIO FIO"
		/>
	</StyledDiv>
);
