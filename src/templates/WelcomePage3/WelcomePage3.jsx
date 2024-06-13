// @flow

import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import Welcome from '../../components/Welcome/Welcome';
import WelcomeAuthButtons from '../../components/WelcomeAuthButtons/WelcomeAuthButtons';
import FourImagesBg from '../../components/FourImagesBg/FourImagesBg';

const WelcomePage = (): React.Node => (
	<FourImagesBg>
		<Welcome>
			<MediaQuery minWidth={361}>
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
			</MediaQuery>
			<MediaQuery maxWidth={360}>
				<WelcomeAuthButtons>
					<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
					<Button type="primary" shape="circle">
						VK
					</Button>
				</WelcomeAuthButtons>
			</MediaQuery>
		</Welcome>
	</FourImagesBg>
);

export default WelcomePage;
