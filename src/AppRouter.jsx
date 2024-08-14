// @flow

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage1 } from './styleguide/templates/WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from './styleguide/templates/WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from './styleguide/templates/WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from './styleguide/templates/WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from './styleguide/templates/WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from './styleguide/templates/WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from './styleguide/templates/WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from './styleguide/templates/WelcomePages/WelcomePage8/WelcomePage8';
import { HomePage } from './styleguide/templates/HomePage/HomePage';
import { HomeDev } from './lib/components/HomeDev/HomeDev';
import { FiltersOpenedPage } from './styleguide/templates/FiltersOpenedPage/FiltersOpenedPage';
import { FiltersClosedPage } from './styleguide/templates/FiltersClosedPage/FiltersClosedPage';
import { FiltersClosedPreviewPage } from './styleguide/templates/FiltersClosedPreviewPage/FiltersClosedPreviewPage';
import { DiffOpenedCardsPage } from './styleguide/templates/DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from './styleguide/templates/DiffClosedCardsPage/DiffClosedCardsPage';
import { OrderPage } from './styleguide/templates/OrderPage/OrderPage';
import { TimeWidgetsPage } from './styleguide/templates/TimeWidgetsPage/TimeWidgetsPage';

export const AppRouter = (): React$MixedElement => (
	<Routes>
		<Route path="/" element={<HomeDev />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/order" element={<OrderPage />} />
		<Route path="/TimeWidgetsPage" element={<TimeWidgetsPage />} />
		<Route path="/FiltersOpenedPage" element={<FiltersOpenedPage />} />
		<Route path="/FiltersClosedPage" element={<FiltersClosedPage />} />
		<Route
			path="/FiltersClosedPreviewPage"
			element={<FiltersClosedPreviewPage />}
		/>
		<Route path="/DiffOpenedCardsPage" element={<DiffOpenedCardsPage />} />
		<Route path="/DiffClosedCardsPage" element={<DiffClosedCardsPage />} />
		<Route path="/WelcomePage1" element={<WelcomePage1 />} />
		<Route path="/WelcomePage2" element={<WelcomePage2 />} />
		<Route path="/WelcomePage3" element={<WelcomePage3 />} />
		<Route path="/WelcomePage4" element={<WelcomePage4 />} />
		<Route path="/WelcomePage5" element={<WelcomePage5 />} />
		<Route path="/WelcomePage6" element={<WelcomePage6 />} />
		<Route path="/WelcomePage7" element={<WelcomePage7 />} />
		<Route path="/WelcomePage8" element={<WelcomePage8 />} />
	</Routes>
);
