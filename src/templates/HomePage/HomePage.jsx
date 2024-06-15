// @flow

import React, { useState } from 'react';
import { Layout, Button, Switch, Flex } from 'antd';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';
import MediaQuery from 'react-responsive';
import HomeAsideNav from '../../components/HomeAsideNav/HomeAsideNav';
import {
	headerStyle,
	contentStyle,
	siderStyle,
	layoutStyle,
} from './home.page.styles';

const HomePage = (): React.Node => {
	const { Header, Sider, Content } = Layout;
	const [isOpen, setIsOpen] = useState(false);
	const onChange = (checked: boolean) => {
		setIsOpen(checked);
	};

	return (
		<Layout style={layoutStyle}>
			<Header style={headerStyle}>
				<Flex justify="space-between">
					<div style={{ fontSize: '2em' }}>
						<span>
							<OpenAIOutlined />
						</span>
						<span>Logotype</span>
					</div>
					<Flex align="center">
						<Switch
							onChange={onChange}
							checked={isOpen}
							style={{ marginRight: '16px' }}
						/>
						<Button type="primary" shape="circle">
							A
						</Button>
					</Flex>
				</Flex>
			</Header>
			<Layout>
				<MediaQuery maxWidth={360}>
					<Sider width={65} style={siderStyle}>
						<HomeAsideNav />
					</Sider>
				</MediaQuery>
				<MediaQuery minWidth={361}>
					<Sider width={200} style={siderStyle}>
						<HomeAsideNav />
					</Sider>
				</MediaQuery>
				<Content style={contentStyle}>Content</Content>
			</Layout>
		</Layout>
	);
};

export default HomePage;
