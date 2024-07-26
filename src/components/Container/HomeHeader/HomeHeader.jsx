// @flow

import React, { useContext, useEffect } from 'react';
import { Avatar, Switch, Flex, ConfigProvider, Layout } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import HomeHeaderMobile from './HomeHeaderMobile/HomeHeaderMobile';
import { ThemeContext } from '../../../context/theme/ThemeContext';
import Logo from './Logo/Logo';

const StyledHeaderDesktop = styled(Layout.Header)`
	padding: 0 16px;
`;

interface IHomeHeaderProps {
	title: string;
	theme: string;
	avatar: any;
}

const HomeHeader = ({
	title,
	theme,
	avatar,
}: IHomeHeaderProps): React$MixedElement => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

	useEffect(() => {
		setCurrentTheme(theme);
	}, [theme, setCurrentTheme]);

	const onChange = (checked: boolean) => {
		const changedTheme = checked ? 'dark' : 'light';
		setCurrentTheme(changedTheme);
	};

	return (
		<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
			<MediaQuery minWidth={361}>
				<StyledHeaderDesktop>
					<Flex justify="space-between">
						<Logo title={title} />
						<Flex align="center">
							<Switch
								checkedChildren={<SunOutlined />}
								unCheckedChildren={<MoonOutlined />}
								onChange={onChange}
								checked={currentTheme === 'dark'}
								style={{ marginRight: '16px' }}
							/>
							<Avatar shape="circle" size="large">
								{avatar.title}
							</Avatar>
						</Flex>
					</Flex>
				</StyledHeaderDesktop>
			</MediaQuery>
			<HomeHeaderMobile title={title} />
		</ConfigProvider>
	);
};

export default HomeHeader;
