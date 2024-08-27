// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper';
import { Layout } from './Layout/Layout';
import { buttons } from './Layout/buttons';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<ThemeWrapper>
			<Layout title="Home" avatar={{ title: 'AV' }} buttons={buttons}>
				<div>Home</div>
			</Layout>
		</ThemeWrapper>
	</StrictMode>
);
