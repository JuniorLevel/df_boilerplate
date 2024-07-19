Компонент Welcome содержит поле ввода, кнопку регистрации, а также панель кнопок авторизации.<br>
<br>
В качестве props принимает children, в нашем случае панель кнопок авторизации.<br>
<br>
Имеет два варианта фона - с 4мя картинками и с одной.
<br>
<br>
Пример в коде:

```jsx static
// @flow
import { Button, Input, Flex, Layout, Typography } from 'antd';
import React from 'react';

const layoutStyle = {
	width: '100%',
	maxWidth: '300px',
	padding: '20px 15px',
};

interface IWelcomeProps {
	children: React.Node;
}

const Welcome = ({ children }: IWelcomeProps): React.Node => {
	const { Title } = Typography;

	return (
		<Flex justify="center" align="center" style={{ height: '100vh' }}>
			<Layout style={layoutStyle}>
				<Title style={{ textAlign: 'center' }}>Welcome</Title>
				<Input placeholder="email" style={{ marginBottom: '20px' }} />
				<Button block style={{ marginBottom: '20px' }}>
					Log in
				</Button>
				<Button block style={{ marginBottom: '20px' }}>
					create account
				</Button>
				{children}
			</Layout>
		</Flex>
	);
};

export default Welcome;
```

Компонент WelcomeAuthButtons принимает в качестве children кол-во кнопок авторизации, от 2х до 10

```jsx static
// @flow
import React from 'react';
import { Flex } from 'antd';

interface IWelcomeAuthButtonsProps {
	children: React.Node;
}

const WelcomeAuthButtons = ({
	children,
}: IWelcomeAuthButtonsProps): React$MixedElement => (
	<Flex wrap gap="large" justify="center" style={{ marginBottom: '20px' }}>
		{children}
	</Flex>
);

export default WelcomeAuthButtons;
```

Пример использования компонента Welcome на странице WelcomePage1

```jsx static
// @flow

import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Welcome from '../../components/Welcome/Welcome';
import FourImagesBg from '../../components/Welcome/FourImagesBg/FourImagesBg';
import WelcomeAuthButtons from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';

const WelcomePage1 = (): React.Node => (
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

export default WelcomePage1;
```

Внешний вид компонента WelcomePage1

```
import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Welcome from '../../components/Welcome/Welcome';
import WelcomeAuthButtons from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';

		<Welcome>
			<WelcomeAuthButtons>
				<Button type="primary" shape="circle" icon={<GoogleOutlined />} />
				<Button type="primary" shape="circle">
					VK
				</Button>
			</WelcomeAuthButtons>
		</Welcome>
```
