// @flow

import React from 'react';
import { Layout } from 'antd';
import HomeHeader from './HomeHeader/HomeHeader';
import { StyledLayout, StyledContent } from './Container.styles';
import HomeSidebar from './HomeSidebar/HomeSidebar';

interface IContainerProps {
	children: React.Node;
	buttons: any[];
	title: string;
	theme?: string;
	avatar: any;
}

export const Container = ({
	children,
	buttons,
	title,
	theme,
	avatar,
}: IContainerProps): React$MixedElement => (
	<StyledLayout>
		<HomeHeader title={title} theme={theme} avatar={avatar} />
		<Layout>
			<HomeSidebar buttons={buttons} />
			<StyledContent>{children}</StyledContent>
		</Layout>
	</StyledLayout>
);
