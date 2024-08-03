// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import { buttons } from '../../components/Container/buttons';

const HomePage = (): React.Node => (
	<Container buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<div>Content</div>
	</Container>
);

export default HomePage;
