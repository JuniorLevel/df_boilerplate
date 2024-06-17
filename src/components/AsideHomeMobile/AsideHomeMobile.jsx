// @flow

import React from 'react';
import { Layout } from 'antd';
import HomeAsideNav from '../HomeAsideNav/HomeAsideNav';

export const siderStyle = {
	backgroundColor: '#989393',
};

const AsideHomeDesktop = (): React$MixedElement => {
	const { Sider } = Layout;
	return (
		<Sider width={65} style={siderStyle}>
			<HomeAsideNav />
		</Sider>
	);
};

export default AsideHomeDesktop;
