// @flow

import React from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';
import { Avatar, Switch, Flex, Layout, ConfigProvider } from 'antd';
import { MoonOutlined, SunOutlined, UserOutlined } from '@ant-design/icons';
import useTheme from '../../hooks/useTheme';

const HeaderHome = (): React.Node => {
	const [currentTheme, setCurrentTheme] = useTheme();
	const { Header } = Layout;

	const onChange = (checked: boolean) => {
		const changedTheme = checked ? 'dark' : 'light';
		setCurrentTheme(changedTheme);
	};

	return (
		<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
			<Header style={{ padding: '0 16px' }}>
				<Flex justify="space-between">
					<div style={{ fontSize: '2em' }}>
						<span>
							<OpenAIOutlined />
						</span>
						<span>Logotype</span>
					</div>
					<Flex align="center">
						<Switch
							checkedChildren={<SunOutlined />}
							unCheckedChildren={<MoonOutlined />}
							onChange={onChange}
							checked={currentTheme === 'dark'}
							style={{ marginRight: '16px' }}
						/>
						<Avatar shape="circle" size="large" icon={<UserOutlined />} />
					</Flex>
				</Flex>
			</Header>
		</ConfigProvider>
	);
};

export default HeaderHome;
