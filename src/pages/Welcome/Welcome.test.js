import { render, screen } from '@testing-library/react';
import React from 'react';
import Welcome from './Welcome';

describe('Welcome Component', () => {
	test('renders correctly', () => {
		render(<Welcome />);
		expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
	});
	test('takes snapshot', () => {
		const { asFragment } = render(<Welcome />);
		expect(asFragment()).toMatchSnapshot();
	});
});
