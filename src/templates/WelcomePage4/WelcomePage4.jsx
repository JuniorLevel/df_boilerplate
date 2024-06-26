// @flow

import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Welcome from '../../components/Welcome/Welcome';
import WelcomeAuthButtons from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import FourImagesBg from '../../components/Welcome/FourImagesBg/FourImagesBg';

const WelcomePage = (): React.Node => (
	<FourImagesBg>
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
	</FourImagesBg>
);

export default WelcomePage;
