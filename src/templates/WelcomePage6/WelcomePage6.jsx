// @flow

import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import Welcome from '../../components/Welcome/Welcome';
import WelcomeAuthButtons from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import SingleImageBg from '../../components/Welcome/SingleImageBg/SingleImageBg';

const WelcomePage6 = (): React.Node => (
	<SingleImageBg>
		<Welcome>
			<MediaQuery minWidth={361}>
				<WelcomeAuthButtons>
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
		</Welcome>
	</SingleImageBg>
);

export default WelcomePage6;
