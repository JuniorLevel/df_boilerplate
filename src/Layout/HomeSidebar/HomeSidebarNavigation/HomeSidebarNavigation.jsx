// @flow

import React from 'react';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles } from '../../layout.styles';

interface IHomeSidebarNavigationProps {
	isCollapsedSidebar?: boolean;
	buttons: any[];
}

export const HomeSidebarNavigation = ({
	isCollapsedSidebar,
	buttons,
}: IHomeSidebarNavigationProps): React.Node => {
	const { styles } = useStyles();

	return (
		<nav>
			{buttons.map((button) => (
				<Flex className={styles.sidebarNavigation} key={button.id}>
					<Button type="ghost" onClick={button.onClick}>
						<MediaQuery minWidth={361}>
							{!isCollapsedSidebar && <span>{button.title}</span>}
						</MediaQuery>
					</Button>
				</Flex>
			))}
		</nav>
	);
};
