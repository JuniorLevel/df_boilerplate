// @flow
import { Button, Input, Flex, Layout, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const layoutStyle = {
	width: '100%',
	maxWidth: '300px',
	padding: '20px 15px',
};

const ButtonContainer = styled.div`
	button {
		margin-bottom: 20px;
	}
`;

interface IWelcomeProps {
	children: React.Node;
	buttons: any[];
}

export const Welcome = ({ children, buttons }: IWelcomeProps): React.Node => {
	const { Title } = Typography;

	return (
		<Flex justify="center" align="center" style={{ height: '100vh' }}>
			<Layout style={layoutStyle}>
				<Title style={{ textAlign: 'center' }}>Welcome</Title>
				<Input placeholder="email" style={{ marginBottom: '20px' }} />
				<ButtonContainer>
					{buttons.map((button) => (
						<Button block key={button.id} onClick={button.onClick}>
							{button.title}
						</Button>
					))}
				</ButtonContainer>
				{children}
			</Layout>
		</Flex>
	);
};
