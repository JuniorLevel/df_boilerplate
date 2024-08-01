import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import WelcomePage1 from './WelcomePage1';

describe('WelcomePage2', () => {
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<WelcomePage1 />
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});

	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<WelcomePage1 />
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});

	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<WelcomePage1 />
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});