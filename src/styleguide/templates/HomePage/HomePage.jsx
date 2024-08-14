// @flow

import React from 'react';
import { Layout } from '../../../lib/components/Layout/Layout';

export const HomePage = (): React.Node => {
	const buttons = [
		{
			id: 1,
			title: 'Orders',
			onClick: () => {},
		},
		{
			id: 2,
			title: 'Compare',
			onClick: () => {},
		},
		{
			id: 3,
			title: 'Admin',
			onClick: () => {},
		},
	];

	return (
		<Layout
			title="Caption"
			buttons={buttons}
			theme="light"
			avatar={{ title: 'AV' }}
		>
			<div />
		</Layout>
	);
};
