// @flow
import { Button, Input, Flex, Layout, Typography } from 'antd';
import React from 'react';

const layoutStyle = {
	width: '100%',
	maxWidth: '300px',
	padding: '20px 15px',
};

interface IWelcomeProps {
	children: React.Node;
}

const Welcome = ({ children }: IWelcomeProps): React.Node => {
	const { Title } = Typography;

	return (
		<Flex justify="center" align="center" style={{ height: '100vh' }}>
			<Layout style={layoutStyle}>
				<Title style={{ textAlign: 'center' }}>Welcome</Title>
				<Input placeholder="email" style={{ marginBottom: '20px' }} />
				<Button block style={{ marginBottom: '20px' }}>
					Log in
				</Button>
				<Button block style={{ marginBottom: '20px' }}>
					create account
				</Button>
				{children}
			</Layout>
		</Flex>
	);
};

export default Welcome;
