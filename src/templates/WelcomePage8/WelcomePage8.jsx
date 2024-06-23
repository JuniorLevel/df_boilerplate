// @flow

import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Welcome from '../../components/Welcome/Welcome';
import WelcomeAuthButtons from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import SingleImageBg from '../../components/Welcome/SingleImageBg/SingleImageBg';

const WelcomePage = (): React.Node => (
	<SingleImageBg>
		<Welcome>
			<WelcomeAuthButtons>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
			</WelcomeAuthButtons>
		</Welcome>
	</SingleImageBg>
);

export default WelcomePage;
