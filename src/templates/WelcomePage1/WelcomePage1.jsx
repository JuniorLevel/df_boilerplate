// @flow

import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Welcome from '../../components/Welcome/Welcome';
import FourImagesBg from '../../components/FourImagesBg/FourImagesBg';
import WelcomeAuthButtons from '../../components/WelcomeAuthButtons/WelcomeAuthButtons';

const WelcomePage = (): React$MixedElement => (
	<FourImagesBg>
		<Welcome>
			<WelcomeAuthButtons>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);

export default WelcomePage;
