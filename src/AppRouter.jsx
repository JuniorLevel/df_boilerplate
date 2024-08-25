// @flow

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage1 } from './WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from './WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from './WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from './WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from './WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from './WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from './WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from './WelcomePages/WelcomePage8/WelcomePage8';
import { HomePage } from './HomePage/HomePage';
import { HomeDev } from './lib/components/HomeDev/HomeDev';
import { OrdersFilterOpenedPage } from './OrdersFilterOpenedPage/OrdersFilterOpenedPage';
import { OrdersFilterClosedPage } from './OrdersFilterClosedPage/OrdersFilterClosedPage';
import { OrderListPreviewPage } from './OrderListPreviewPage/OrderListPreviewPage';
import { DiffOpenedCardsPage } from './DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from './DiffClosedCardsPage/DiffClosedCardsPage';
import { OrderPage } from './OrderPage/OrderPage';
import { TimeWidgetsPage } from './TimeWidgetsPage/TimeWidgetsPage';

export const AppRouter = (): React$MixedElement => (
	<Routes>
		<Route path="/" element={<HomeDev />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/order" element={<OrderPage />} />
		<Route path="/TimeWidgetsPage" element={<TimeWidgetsPage />} />
		<Route
			path="/OrdersFilterOpenedPage"
			element={<OrdersFilterOpenedPage />}
		/>
		<Route
			path="/OrdersFilterClosedPage"
			element={<OrdersFilterClosedPage />}
		/>
		<Route path="/OrderListPreviewPage" element={<OrderListPreviewPage />} />
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
