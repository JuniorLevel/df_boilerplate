// @flow

import React from 'react';
import HomeHeaderDesktop from './HomeHeaderDesktop/HomeHeaderDesktop';
import HomeHeaderMobile from './HomeHeaderMobile/HomeHeaderMobile';

const HomeHeader = (): React$MixedElement => (
	<>
		<HomeHeaderMobile />
		<HomeHeaderDesktop />
	</>
);

export default HomeHeader;
