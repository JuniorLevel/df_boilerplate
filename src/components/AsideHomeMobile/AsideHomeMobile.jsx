// @flow

import React from 'react';
import { Layout } from 'antd';
import HomeAsideNav from '../HomeAsideNav/HomeAsideNav';

const AsideHomeDesktop = (): React$MixedElement => {
	const { Sider } = Layout;
	return (
		<Sider width={65}>
			<HomeAsideNav />
		</Sider>
	);
};

export default AsideHomeDesktop;
