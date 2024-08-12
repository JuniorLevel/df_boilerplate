// @flow

import React from 'react';
import { Container as Layout } from '../../components/Container/Container';

const HomePage = (): React.Node => {
	const buttons = [
		{
			title: 'Orders',
			onClick: () => {},
		},
		{
			title: 'Compare',
			onClick: () => {},
		},
		{
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

export default HomePage;
