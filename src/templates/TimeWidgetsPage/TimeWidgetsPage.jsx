// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import TimeWidgetsPanel from '../../components/TimeWidgetsPanel/TimeWidgetsPanel';
import { buttons } from '../../components/Container/buttons';

const TimeWidgetsPage = (): React$MixedElement => (
	<Container buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<TimeWidgetsPanel />
	</Container>
);

export default TimeWidgetsPage;
