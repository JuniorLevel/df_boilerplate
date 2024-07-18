// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ConfigProvider } from 'antd';
import AppRouter from './components/AppRouter';
import { ThemeProvider, ThemeContext } from './context/theme/ThemeContext';
import { LightTheme, DarkTheme, GlobalStyle } from './assets/global.styles';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<ThemeContext.Consumer>
					{({ currentTheme }) => (
						<ConfigProvider
							theme={currentTheme === 'light' ? LightTheme : DarkTheme}
						>
							<GlobalStyle />
							<AppRouter />
						</ConfigProvider>
					)}
				</ThemeContext.Consumer>
			</ThemeProvider>
			<Reset />
		</BrowserRouter>
	</StrictMode>
);
