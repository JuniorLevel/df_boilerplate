// @flow
import React, { useState, useEffect, useRef } from 'react';
import { ConfigProvider } from 'antd';
import MediaQuery from 'react-responsive';
import HomeSidebarNavigation from '../HomeSidebarNavigation/HomeSidebarNavigation';
import { StyledHomeSidebarDesktop } from './HomeSidebarDesktop.styles';

const HomeSidebarDesktop = (): React$MixedElement => {
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

	return (
		<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
			<MediaQuery minWidth={361}>
				<StyledHomeSidebarDesktop
					width={isCollapsedSidebar ? 65 : 200}
					ref={sidebarRef}
				>
					<HomeSidebarNavigation isCollapsedSidebar={isCollapsedSidebar} />
				</StyledHomeSidebarDesktop>
			</MediaQuery>
		</ConfigProvider>
	);
};

export default HomeSidebarDesktop;
