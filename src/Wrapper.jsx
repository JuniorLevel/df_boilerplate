/* eslint-disable import/no-default-export */
// @flow

import React from 'react';
import { Reset } from 'styled-reset';
import { ConfigProvider } from 'antd';
import { ThemeProvider, ThemeContext } from './context/theme/ThemeContext';
import { LightTheme, DarkTheme, GlobalStyle } from './global.styles';

interface IWrapperProps {
	children: React.Node;
}

const Wrapper = ({ children }: IWrapperProps): React$MixedElement => (
	<>
		<ThemeProvider>
			<ThemeContext.Consumer>
				{({ currentTheme }) => (
					<ConfigProvider
						theme={currentTheme === 'light' ? LightTheme : DarkTheme}
					>
						<GlobalStyle />
						{children}
					</ConfigProvider>
				)}
			</ThemeContext.Consumer>
		</ThemeProvider>
		<Reset />
	</>
);

export default Wrapper;
