// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import MediaQuery from 'react-responsive';
import { homeSidebarRoutes } from './home.sidebar.routes';
import { StyledListItem } from './HomeSidebarNavigation.styles';

interface IHomeSidebarNavigationProps {
	isCollapsedSidebar?: boolean;
}

const HomeSidebarNavigation = ({
	isCollapsedSidebar,
}: IHomeSidebarNavigationProps): React$MixedElement => (
	<nav>
		<ul>
			{homeSidebarRoutes.map((route) => (
				<Link key={route.id} to={route.path}>
					<StyledListItem>
						<Button
							type="ghost"
							style={{ borderRadius: '0px', fontSize: '1.5em' }}
						>
							<route.icon />
							<MediaQuery minWidth={361}>
								{!isCollapsedSidebar && <span>{route.name}</span>}
							</MediaQuery>
						</Button>
					</StyledListItem>
				</Link>
			))}
		</ul>
	</nav>
);

export default HomeSidebarNavigation;
