// @flow

import React, { useState } from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';
import { Avatar, Switch, Flex, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const HeaderHome = (): React.Node => {
	const [isOpen, setIsOpen] = useState(false);
	const onChange = (checked: boolean) => {
		setIsOpen(checked);
	};
	const { Header } = Layout;

	return (
		<Header
			style={{ color: '#fff', padding: '0 16px', backgroundColor: '#989393' }}
		>
			<Flex justify="space-between">
				<div style={{ fontSize: '2em' }}>
					<span>
						<OpenAIOutlined />
					</span>
					<span>Logotype</span>
				</div>
				<Flex align="center">
					<Switch
						onChange={onChange}
						checked={isOpen}
						style={{ marginRight: '16px' }}
					/>
					<Avatar shape="circle" size="large" icon={<UserOutlined />} />
				</Flex>
			</Flex>
		</Header>
	);
};

export default HeaderHome;
