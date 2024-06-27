import React from 'react';
import { Badge, Flex } from 'antd';
import OrdersDeffHistory from '../OrdersDeffHistory/OrdersDeffHistory';

export const ordersTabsItems = [
	{
		key: 1,
		label: (
			<Flex gap={10} align="center">
				<div>Main info</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 1</div>,
	},
	{
		key: 2,
		label: (
			<Flex gap={10} align="center">
				<div>Chat</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 2</div>,
	},
	{
		key: 3,
		label: (
			<Flex gap={10} align="center">
				<div>Dashboard</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 3</div>,
	},
	{
		key: 4,
		label: (
			<Flex gap={10} align="center">
				<div>Documents</div>
				<Badge count={3} />
			</Flex>
		),
		children: <div>Content of Tab Pane 4</div>,
	},
	{
		key: 5,
		label: (
			<Flex gap={10} align="center">
				<div>History</div>
				<Badge count={3} />
			</Flex>
		),
		children: <OrdersDeffHistory />,
	},
];
