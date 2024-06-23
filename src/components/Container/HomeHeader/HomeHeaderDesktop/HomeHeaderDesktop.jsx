// @flow

import React, { useContext } from 'react';
import { Avatar, Switch, Flex, ConfigProvider } from 'antd';
import { MoonOutlined, SunOutlined, UserOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import { ThemeContext } from '../../../../context/theme/ThemeContext';
import Logo from '../Logo/Logo';
import { StyledHeaderDesktop } from './HomeHeaderDesktop.styles';

const HomeHeaderDesktop = (): React.Node => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

	const onChange = (checked: boolean) => {
		const changedTheme = checked ? 'dark' : 'light';
		setCurrentTheme(changedTheme);
	};

	return (
		<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
			<MediaQuery minWidth={361}>
				<StyledHeaderDesktop>
					<Flex justify="space-between">
						<Logo />
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
				</StyledHeaderDesktop>
			</MediaQuery>
		</ConfigProvider>
	);
};

export default HomeHeaderDesktop;
