// @flow

import React from 'react';
import { Layout } from '../../../lib/components/Layout/Layout';
import { TimeWidgetsPanel } from '../../../lib/components/TimeWidgetsPanel/TimeWidgetsPanel';
import { buttons } from '../../../lib/components/Layout/buttons';

export const TimeWidgetsPage = (): React$MixedElement => (
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<TimeWidgetsPanel />
	</Layout>
);
