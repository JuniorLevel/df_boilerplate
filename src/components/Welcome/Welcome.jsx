// @flow
import { Button, Input, Flex, Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-size: 3rem;
	margin-bottom: 50px;
	text-transform: uppercase;
	font-weight: 400;
`;

const layoutStyle = {
	width: '100%',
	maxWidth: '300px',
	padding: '20px 15px',
};

interface IWelcomeProps {
	children: React.Node;
}

const Welcome = ({ children }: IWelcomeProps): React$MixedElement => (
	<Flex justify="center" align="center" style={{ height: '100vh' }}>
		<Layout style={layoutStyle}>
			<Title>Welcome</Title>
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

export default Welcome;
