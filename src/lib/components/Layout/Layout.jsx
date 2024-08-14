// @flow

import React from 'react';
import { Layout as AntLayout } from 'antd';
import { HomeHeader } from './HomeHeader/HomeHeader';
import { StyledLayout, StyledContent } from './Layout.styles';
import { HomeSidebar } from './HomeSidebar/HomeSidebar';

interface ILayoutProps {
	children: React.Node;
	buttons: any[];
	title: string;
	theme?: string;
	avatar: any;
}

export const Layout = ({
	children,
	buttons,
	title,
	theme,
	avatar,
}: ILayoutProps): React$MixedElement => (
	<StyledLayout>
		<HomeHeader title={title} theme={theme} avatar={avatar} />
		<AntLayout>
			<HomeSidebar buttons={buttons} />
			<StyledContent>{children}</StyledContent>
		</AntLayout>
	</StyledLayout>
);
