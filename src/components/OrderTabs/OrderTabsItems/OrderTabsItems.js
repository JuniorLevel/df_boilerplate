import React from 'react';
import OrderDiffHistory from '../OrderDiffHistory/OrderDiffHistory';

export const filters = [
	{
		title: 'Group1',
		description: 'CustomItem1',
	},
	{
		title: 'Group2',
		description: 'CustomItem2',
	},
	{
		title: 'Group3',
		description: 'CustomItem3',
	},
	{
		title: 'Group4',
		description: 'CustomItem4',
	},
	{
		title: 'Group5',
		description: 'CustomItem5',
	},
	{
		title: 'Group6',
		description: 'CustomItem6',
	},
];

export const tabs = [
	{
		key: 1,
		title: 'Main info',
		count: 3,
		children: <div>Content of Tab Pane 1</div>,
	},
	{
		key: 2,
		title: 'Chat',
		count: 8,
		children: <div>Content of Tab Pane 2</div>,
	},
	{
		key: 3,
		title: 'Dashboard',
		count: 2,
		children: <div>Content of Tab Pane 3</div>,
	},
	{
		key: 4,
		title: 'Documents',
		count: 7,
		children: <div>Content of Tab Pane 4</div>,
	},
	{
		key: 5,
		title: 'History',
		count: 1,
		children: <OrderDiffHistory filters={filters} />,
	},
];
