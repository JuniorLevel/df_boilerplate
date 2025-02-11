// @flow

import React from 'react';
import { Avatar, Flex, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/Logo';
import { useStyles } from '../../layout.styles';

interface IHomeHeaderMobileProps {
	title: string;
}

export const HomeHeaderMobile = ({
	title,
}: IHomeHeaderMobileProps): React.Node => {
	const { Header } = Layout;
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={360}>
			<Header className={styles.headerMobile}>
				<Flex justify="space-between" align="center">
					<BurgerMenu />
					<Logo title={title} />
					<Flex align="center">
						<Avatar shape="circle" size="large" icon={<UserOutlined />} />
					</Flex>
				</Flex>
			</Header>
		</MediaQuery>
	);
};
