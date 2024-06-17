// @flow
import React, { useState, useEffect, useRef } from 'react';
import { Layout } from 'antd';
import HomeAsideNav from '../HomeAsideNav/HomeAsideNav';

const AsideHomeDesktop = (): React$MixedElement => {
	const { Sider } = Layout;
	const [isCollapsedSider, setIsCollapsedSider] = useState(true);
	const siderRef = useRef(null);

	const handleMouseOver = () => {
		setIsCollapsedSider(false);
	};

	const handleMouseLeave = () => {
		setIsCollapsedSider(true);
	};

	useEffect(() => {
		const siderElement = siderRef.current;
		if (siderElement) {
			siderElement.addEventListener('mouseover', handleMouseOver);
			siderElement.addEventListener('mouseleave', handleMouseLeave);
			return () => {
				siderElement.removeEventListener('mouseover', handleMouseOver);
				siderElement.removeEventListener('mouseleave', handleMouseLeave);
			};
		}
	}, []);

	return (
		<Sider
			width={isCollapsedSider ? 65 : 200}
			style={{
				overflow: 'auto',
				backgroundColor: '#989393',
			}}
			ref={siderRef}
		>
			<HomeAsideNav isCollapsedSider={isCollapsedSider} />
		</Sider>
	);
};

export default AsideHomeDesktop;
