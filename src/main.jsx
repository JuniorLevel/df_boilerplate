// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import AppRouter from './components/AppRouter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<BrowserRouter>
			<AppRouter />
			<Reset />
		</BrowserRouter>
	</StrictMode>
);
