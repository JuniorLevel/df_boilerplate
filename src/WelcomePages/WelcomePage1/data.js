/* eslint-disable no-alert */

import Image1 from '../../lib/components/Welcome/pictures/Image1.jpg';
import Image2 from '../../lib/components/Welcome/pictures/Image2.jpg';
import Image3 from '../../lib/components/Welcome/pictures/Image3.jpg';
import Image4 from '../../lib/components/Welcome/pictures/Image4.jpg';

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
		onClick: () => alert('email'),
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

export const authButtons = [
	{ id: 1, title: 'G', onClick: () => alert('click1') },
	{ id: 2, title: 'VK', onClick: () => alert('click2') },
];
