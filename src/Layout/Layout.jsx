// @flow

import React, { useContext, useEffect } from 'react';
import { Layout as HomeLayout } from 'antd';
import { HomeHeader } from './HomeHeader/HomeHeader';
import { HomeSidebar } from './HomeSidebar/HomeSidebar';
import { useStyles } from './layout.styles';
import { ThemeContext } from '../context/theme/ThemeContext';

interface ILayoutProps {
	children: React.Node;
	buttons: any[];
	title: string;
	theme?: string;
	avatar: { title: string };
	footer?: React.Node;
}

export const Layout = ({
	children,
	buttons,
	title,
	theme,
	avatar,
	footer,
}: ILayoutProps): React.Node => {
	const { Content, Footer } = HomeLayout;
	const { styles } = useStyles();

	const { isFooter, setIsFooter } = useContext(ThemeContext);

	useEffect(() => {
		if (footer) setIsFooter(true);
		return () => setIsFooter(false);
	}, [isFooter, footer, setIsFooter]);

	return (
		<HomeLayout className={styles.layout} theme={theme}>
			<HomeHeader title={title} theme={theme} avatar={avatar} />
			<HomeLayout>
				<HomeSidebar buttons={buttons} />
				<Content className={styles.content}>{children}</Content>
			</HomeLayout>
			{footer && <Footer className={styles.footer}>{footer}</Footer>}
		</HomeLayout>
	);
};
