/* eslint-disable import/no-default-export */
// @flow

import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { Reset } from 'styled-reset';
import { ThemeProvider, ThemeContext } from './context/theme/ThemeContext';
import { GlobalStyle } from './global.styles';

interface IWrapperProps {
	children: React.Node;
}

const Wrapper = ({ children }: IWrapperProps): React.Node => (
	<ThemeProvider>
		<ThemeContext.Consumer>
			{({ currentTheme }) => (
				<ConfigProvider
					theme={{
						algorithm:
							currentTheme === 'light'
								? theme.defaultAlgorithm
								: theme.darkAlgorithm,
					}}
				>
					{children}
					<GlobalStyle />
					<Reset />
				</ConfigProvider>
			)}
		</ThemeContext.Consumer>
	</ThemeProvider>
);

export default Wrapper;
