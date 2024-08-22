import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    word-break: normal !important;
  }
`;

export const LightTheme = {
	token: {
		colorPrimary: 'blue',
		colorTextBase: 'black',
	},
};

export const DarkTheme = {
	token: {
		colorPrimary: 'black',
		colorTextBase: 'white',
		colorBgBase: '#333333',
	},
};
