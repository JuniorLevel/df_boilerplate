// @flow
import { Button, Input, Flex, Layout, Typography } from 'antd';
import React from 'react';
import { useStyles } from './welcome.styles';

interface IWelcomeProps {
	children: React.Node;
	buttons: any[];
}

const { Title } = Typography;

export const Welcome = ({ children, buttons }: IWelcomeProps): React.Node => {
	const { styles } = useStyles();

	return (
		<Flex className={styles.welcome} justify="center" align="center">
			<Layout className={styles.layout}>
				<Title className={styles.title}>Welcome</Title>
				<Input className={styles.input} placeholder="email" />
				<div className={styles.buttonContainer}>
					{buttons.map((button) => (
						<Button block key={button.id} onClick={button.onClick}>
							{button.title}
						</Button>
					))}
				</div>
				{children}
			</Layout>
		</Flex>
	);
};
