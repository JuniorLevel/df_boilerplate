// @flow
import { GoogleOutlined } from '@ant-design/icons';

import { Button, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-size: 3rem;
	margin-bottom: 50px;
	text-transform: uppercase;
	font-weight: 400;
`;

const Container = styled.div`
	background-color: #e4e1df;
	max-width: 250px;
	width: 100%;
	margin: 0 auto;
	padding: 1px 40px;
	margin-top: 25vh;
`;

const SignButtonPanel = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	align-items: center;
	margin-bottom: 60px;
`;

const BorderButton = styled.div`
	border: 5px solid black;
	border-radius: 50%;
	cursor: pointer;
`;

const EnterEmailInput = styled(Input)`
	border: 3px solid black;
	color: black;
	border-radius: 0px;
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 20px;
	text-align: center;
	&::placeholder {
		color: grey;
	}
`;

const Welcome = (): React$Node => (
	<Container>
		<Title>Welcome</Title>
		<EnterEmailInput placeholder="email" />
		<Button
			style={{
				border: '3px solid black',
				color: 'black',
				borderRadius: '0px',
				fontSize: '1rem',
				marginBottom: '20px',
				width: '100%',
				fontWeight: 700,
			}}
		>
			Log in
		</Button>
		<Button
			style={{
				border: '3px solid black',
				color: 'black',
				borderRadius: '0px',
				fontSize: '1rem',
				marginBottom: '70px',
				width: '100%',
				fontWeight: 700,
			}}
		>
			create account
		</Button>
		<SignButtonPanel>
			<BorderButton>
				<GoogleOutlined style={{ fontSize: '50px' }} />
			</BorderButton>
			<BorderButton>
				<span style={{ fontSize: '35px' }}>VK</span>
			</BorderButton>
		</SignButtonPanel>
	</Container>
);

export default Welcome;
