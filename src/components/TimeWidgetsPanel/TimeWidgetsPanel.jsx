// @flow

import React from 'react';
import styled from 'styled-components';
import TextFieldWidget from './TextFieldWidget/TextFieldWidget';
import TimeWidgets1 from './TimeWidgets1/TimeWidgets1';
import TimeWidgets2 from './TimeWidgets2/TimeWidgets2';
import TimeWidgets3 from './TimeWidgets3/TimeWidgets3';
import TimeWidgets4 from './TimeWidgets4/TimeWidgets4';
import TimeWidgets5 from './TimeWidgets5/TimeWidgets5';
import TimeWidgets6 from './TimeWidgets6/TimeWidgets6';
import TimeWidgets7 from './TimeWidgets7/TimeWidgets7';
import TimeWidgetsWithTextField1 from './TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import TimeWidgetsWithTextField2 from './TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import TimeWidgetsWithTextField3 from './TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';
import PersonWidget from './PersonWidget/PersonWidget';
import TimeWidgetsWithPerson from './TimeWidgetsWithPerson/TimeWidgetsWithPerson';

const StyledDiv = styled.div`
	margin-bottom: 20px;
`;

const TimeWidgetsPanel = (): React$MixedElement => (
	<div style={{ padding: '10px' }}>
		<StyledDiv>
			<TimeWidgets1 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets2 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets3 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets4 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets5 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets6 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets7 />
		</StyledDiv>
		<StyledDiv
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithTextField1 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithTextField2 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithTextField3 />
		</StyledDiv>
		<StyledDiv>
			<PersonWidget />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithPerson />
		</StyledDiv>
	</div>
);

export default TimeWidgetsPanel;
