// @flow

import React from 'react';
import { Layout } from 'antd';
import HomeHeader from './HomeHeader/HomeHeader';
import { StyledLayout, StyledContent } from './Container.styles';
import HomeSidebar from './HomeSidebar/HomeSidebar';

interface IContainerProps {
	children: React.Node;
}
const Container = ({ children }: IContainerProps): React$MixedElement => (
	<StyledLayout>
		<HomeHeader />
		<Layout>
			<HomeSidebar />
			<StyledContent>{children}</StyledContent>
		</Layout>
	</StyledLayout>
);

export default Container;
