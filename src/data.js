// @flow

import React from 'react';
import { Flex, Badge } from 'antd';
import Image1 from './Welcome/pictures/Image1.jpg';
import Image2 from './Welcome/pictures/Image2.jpg';
import Image3 from './Welcome/pictures/Image3.jpg';
import Image4 from './Welcome/pictures/Image4.jpg';

export const sidebarButtons = [
	{
		id: 1,
		title: 'Orders',
		onClick: () => {},
	},
	{
		id: 2,
		title: 'Compare',
		onClick: () => {},
	},
	{
		id: 3,
		title: 'Admin',
		onClick: () => {},
	},
];

export const data = [
	{
		id: 1,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 2,
		dataSearch: [
			{
				id: 1,
				counter: 3,
				status: 'changed',
				text: 'Typescript',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 3,
		dataSearch: [
			{
				id: 1,
				counter: 3,
				status: 'changed',
				text: 'Typescript',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 4,
		dataSearch: [
			{
				id: 1,
				counter: 3,
				status: 'changed',
				text: 'Typescript',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 5,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 6,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 7,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 8,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
];

export const filters = [
	{
		id: 1,
		title: 'Flow_typed-1',
		item: [{ id: 1, status: 'updated', text: 'lorem-1' }],
	},

	{
		id: 2,
		title: 'Flow_typed-2',
		item: [
			{ id: 1, status: 'changed', text: 'project-1' },
			{ id: 2, status: 'changed', text: 'project-2' },
			{ id: 3, status: 'updated', text: 'project-3' },
		],
	},
	{
		id: 3,
		title: 'Flow_typed-3',
		item: [
			{ id: 1, status: 'updated', text: 'issue-1' },
			{ id: 2, status: 'updated', text: 'issue-2' },
		],
	},
];

export const filters2 = [
	{
		title: 'Group 1',
		description: 'Order by John',
	},
	{
		title: 'Group 2',
		description: 'Order by Smith',
	},
	{
		title: 'Group 3',
		description: 'Order by Sam',
	},
	{
		title: 'Group 4',
		description: 'Order by Nick',
	},
	{
		title: 'Group 5',
		description: 'Order by Merry',
	},
	{
		title: 'Group 6',
		description: 'Order by Scott',
	},
];

export const items = [
	{
		key: 1,
		label: (
			<Flex gap={10} align="center">
  <div>Main info</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 1</div> as React.Node,
	},
	{
		key: 2,
		label: (
			<Flex gap={10} align="center">
  <div>Chat</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 2</div> as React.Node,
	},
	{
		key: 3,
		label: (
			<Flex gap={10} align="center">
  <div>Dashboard</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 3</div> as React.Node,
	},
	{
		key: 4,
		label: (
			<Flex gap={10} align="center">
  <div>Documents</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 4</div> as React.Node,
	},
];

export const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

export const welcomeButtons = [
	{
		id: 1,
		title: 'email',
		onClick: (): void => alert('email'),
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: (): void => alert('LogIn'),
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: (): void => alert('CreateAccount'),
	},
];

export const authButtons = [
	{ id: 1, title: 'G', onClick: (): void => alert('click1') },
	{ id: 2, title: 'VK', onClick: (): void => alert('click2') },
];