/* eslint-disable no-inline-styles/no-inline-styles */
// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Welcome } from './Welcome/Welcome';
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper';
import { authButtons, images, welcomeButtons } from './data';
import { FourImagesBg } from './Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from './Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from './Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);

	root.render(
		<StrictMode>
			<ThemeWrapper>
				<FourImagesBg imagesUrls={images}>
					<Welcome buttons={welcomeButtons}>
						<WelcomeAuthButtons>
							<WelcomeButton
								title={authButtons[0].title}
								onClick={authButtons[0].onClick}
							/>
							<WelcomeButton
								title={authButtons[1].title}
								onClick={authButtons[1].onClick}
							/>
						</WelcomeAuthButtons>
					</Welcome>
				</FourImagesBg>
			</ThemeWrapper>
		</StrictMode>
	);
}
