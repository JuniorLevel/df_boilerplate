// @flow

import React from 'react';
import { Layout } from 'antd';
import MediaQuery from 'react-responsive';
import HeaderHome from '../HeaderHome/HeaderHome';
import AsideHomeMobile from '../AsideHomeMobile/AsideHomeMobile';
import AsideHomeDesktop from '../AsideHomeDesktop/AsideHomeDesktop';

interface IContainerProps {
	children: React.Node;
}
const Container = ({ children }: IContainerProps): React$MixedElement => {
	const { Content } = Layout;

	return (
		<Layout style={{ height: '100vh', overflowY: 'hidden' }}>
			<HeaderHome />
			<Layout>
				<MediaQuery maxWidth={360}>
					<AsideHomeMobile />
				</MediaQuery>
				<MediaQuery minWidth={361}>
					<AsideHomeDesktop />
				</MediaQuery>
				<Content style={{ color: '#000000' }}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default Container;
