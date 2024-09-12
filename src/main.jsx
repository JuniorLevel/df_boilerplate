// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<ThemeWrapper>
			<div>Home</div>
		</ThemeWrapper>
	</StrictMode>
);
