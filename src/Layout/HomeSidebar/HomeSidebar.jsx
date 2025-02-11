// @flow

import React, { useEffect, useRef, useState } from 'react';
import { Layout } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles } from '../layout.styles';
import { HomeSidebarNavigation } from './HomeSidebarNavigation/HomeSidebarNavigation';

interface IHomeSidebarProps {
	buttons: any[];
}

export const HomeSidebar = ({
	buttons,
}: IHomeSidebarProps): React$MixedElement => {
	const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(true);
	const sidebarRef = useRef(null);

	const handleMouseOver = () => {
		setIsCollapsedSidebar(false);
	};

	const handleMouseLeave = () => {
		setIsCollapsedSidebar(true);
	};

	useEffect(() => {
		const sidebarElement = sidebarRef.current;
		if (sidebarElement) {
			sidebarElement.addEventListener('mouseover', handleMouseOver);
			sidebarElement.addEventListener('mouseleave', handleMouseLeave);
			return () => {
				sidebarElement.removeEventListener('mouseover', handleMouseOver);
				sidebarElement.removeEventListener('mouseleave', handleMouseLeave);
			};
		}
	}, []);

	const { Sider } = Layout;
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={361}>
			<Sider
				className={styles.sidebar}
				width={isCollapsedSidebar ? 65 : 200}
				ref={sidebarRef}
			>
				<HomeSidebarNavigation
					buttons={buttons}
					isCollapsedSidebar={isCollapsedSidebar}
				/>
			</Sider>
		</MediaQuery>
	);
};
