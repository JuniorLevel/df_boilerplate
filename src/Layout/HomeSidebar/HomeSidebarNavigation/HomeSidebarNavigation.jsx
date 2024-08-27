// @flow

import React from 'react';
import { Button } from 'antd';
import MediaQuery from 'react-responsive';
import { StyledHomeSidebarNavigationListItem } from '../../Layout.styles';

interface IHomeSidebarNavigationProps {
	isCollapsedSidebar?: boolean;
	buttons: any[];
}

export const HomeSidebarNavigation = ({
	isCollapsedSidebar,
	buttons,
}: IHomeSidebarNavigationProps): React$MixedElement => (
	<nav>
		<ul>
			{buttons.map((button) => (
				<StyledHomeSidebarNavigationListItem key={button.id}>
					<Button
						type="ghost"
						style={{ borderRadius: '0px', fontSize: '1.5em' }}
						onClick={button.onClick}
					>
						<MediaQuery minWidth={361}>
							{!isCollapsedSidebar && <span>{button.title}</span>}
						</MediaQuery>
					</Button>
				</StyledHomeSidebarNavigationListItem>
			))}
		</ul>
	</nav>
);
