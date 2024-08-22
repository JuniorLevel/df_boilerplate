// @flow

import React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { sidebarButtons } from './data';

export const HomePage = (): React.Node => (
	<Layout
		title="Caption"
		buttons={sidebarButtons}
		theme="light"
		avatar={{ title: 'AV' }}
	>
		<div />
	</Layout>
);
