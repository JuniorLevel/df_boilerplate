// @flow

import React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { TimeWidgetsPanel } from '../lib/components/TimeWidgetsPanel/TimeWidgetsPanel';
import { sidebarButtons } from './data';

export const TimeWidgetsPage = (): React$MixedElement => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<TimeWidgetsPanel />
	</Layout>
);
