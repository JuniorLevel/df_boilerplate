// @flow
import React, { useState, useEffect, useRef } from 'react';
import { ConfigProvider, Layout } from 'antd';
import HomeAsideNav from '../HomeAsideNav/HomeAsideNav';

const AsideHomeDesktop = (): React$MixedElement => {
	const { Sider } = Layout;
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
			<Sider
				width={isCollapsedSidebar ? 65 : 200}
				style={{
					overflow: 'auto',
				}}
				ref={sidebarRef}
			>
				<HomeAsideNav isCollapsedSidebar={isCollapsedSidebar} />
			</Sider>
		</ConfigProvider>
	);
};

export default AsideHomeDesktop;
