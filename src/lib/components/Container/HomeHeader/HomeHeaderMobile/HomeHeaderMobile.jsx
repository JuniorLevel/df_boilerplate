// @flow

import React from 'react';
import { Avatar, Flex, ConfigProvider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import { StyledHeaderMobile } from './HomeHeaderMobile.styles';

interface IHomeHeaderMobileProps {
	title: string;
}

const HomeHeaderMobile = ({ title }: IHomeHeaderMobileProps): React.Node => (
	<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
		<MediaQuery maxWidth={360}>
			<StyledHeaderMobile>
				<Flex justify="space-between" align="center">
					<BurgerMenu />
					<Logo title={title} />
					<Flex align="center">
						<Avatar shape="circle" size="large" icon={<UserOutlined />} />
					</Flex>
				</Flex>
			</StyledHeaderMobile>
		</MediaQuery>
	</ConfigProvider>
);

export default HomeHeaderMobile;
