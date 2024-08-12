// @flow

import React from 'react';
import { Button } from 'antd';
import MediaQuery from 'react-responsive';
import { StyledHomeSidebarNavigationListItem } from '../../Container.styles';

interface IHomeSidebarNavigationProps {
	isCollapsedSidebar?: boolean;
	buttons: any[];
}

const HomeSidebarNavigation = ({
	isCollapsedSidebar,
	buttons,
}: IHomeSidebarNavigationProps): React$MixedElement => (
	<nav>
		<ul>
			{buttons.map((button, idx) => (
				// eslint-disable-next-line react/no-array-index-key
				<StyledHomeSidebarNavigationListItem key={idx}>
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

export default HomeSidebarNavigation;
