import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import WelcomePage3 from './WelcomePage3';

describe('WelcomePage2', () => {
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<WelcomePage3 />
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});

	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<WelcomePage3 />
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});

	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<WelcomePage3 />
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});
