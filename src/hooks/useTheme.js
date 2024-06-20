// @flow
import { useState, useLayoutEffect, useEffect } from 'react';

const useTheme = (): [string, (string) => void] => {
	const [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem('theme') || 'light'
	);

	useLayoutEffect(() => {
		if (document.documentElement) {
			document.documentElement.setAttribute('data-theme', currentTheme);
			localStorage.setItem('theme', currentTheme);
		}
	}, [currentTheme]);

	useEffect(() => {
		const targetNode = document.documentElement;
		if (!targetNode) return;

		const handleAttributeChange = () => {
			const newValue = targetNode.getAttribute('data-theme');
			if (newValue) {
				setCurrentTheme(newValue);
			}
		};

		const observer = new MutationObserver(handleAttributeChange);
		observer.observe(targetNode, {
			attributes: true,
			attributeFilter: ['data-theme'],
		});

		return () => {
			observer.disconnect();
		};
	}, [setCurrentTheme]);

	return [currentTheme, setCurrentTheme];
};

export default useTheme;
