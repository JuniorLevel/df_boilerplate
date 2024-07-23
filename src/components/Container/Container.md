Компонент Container задаёт структуру страницу, принимающий children в качестве props<br>
<br>
Содержит в себе компонент HomeHeader (шапка страницы) и HomeSidebar (левый сайдбар)<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Layout } from 'antd';
import HomeHeader from './HomeHeader/HomeHeader';
import { StyledLayout, StyledContent } from './Container.styles';
import HomeSidebar from './HomeSidebar/HomeSidebar';

interface IContainerProps {
	children: React.Node;
}
const Container = ({ children }: IContainerProps): React$MixedElement => (
	<StyledLayout>
		<HomeHeader />
		<Layout>
			<HomeSidebar />
			<StyledContent>{children}</StyledContent>
		</Layout>
	</StyledLayout>
);

export default Container;
```

<br>
Стили Container.styles.js

```jsx static
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
	height: 100vh;
`;

export const StyledContent = styled(Content)`
	height: calc(100vh - 64px);
	overflow: auto;
`;
```

<br>
<br>

Компонент HomeHeader:

```jsx static
// @flow

import React, { useContext } from 'react';
import { Avatar, Switch, Flex, ConfigProvider } from 'antd';
import { MoonOutlined, SunOutlined, UserOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import { ThemeContext } from '../../../../context/theme/ThemeContext';
import Logo from '../Logo/Logo';
import { StyledHeaderDesktop } from './HomeHeaderDesktop.styles';

const HomeHeaderDesktop = (): React.Node => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

	const onChange = (checked: boolean) => {
		const changedTheme = checked ? 'dark' : 'light';
		setCurrentTheme(changedTheme);
	};

	return (
		<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
			<MediaQuery minWidth={361}>
				<StyledHeaderDesktop>
					<Flex justify="space-between">
						<Logo />
						<Flex align="center">
							<Switch
								checkedChildren={<SunOutlined />}
								unCheckedChildren={<MoonOutlined />}
								onChange={onChange}
								checked={currentTheme === 'dark'}
								style={{ marginRight: '16px' }}
							/>
							<Avatar shape="circle" size="large" icon={<UserOutlined />} />
						</Flex>
					</Flex>
				</StyledHeaderDesktop>
			</MediaQuery>
		</ConfigProvider>
	);
};

export default HomeHeaderDesktop;
```

<br>

Стили HomeHeaderDesktop.styles.js
<br>

```jsx static
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const StyledHeaderDesktop = styled(Header)`
	padding: 0 16px;
`;
```

<br>

Компонент HomeSidebarDesktop
<br>

```jsx static
// @flow
import React, { useState, useEffect, useRef } from 'react';
import { ConfigProvider } from 'antd';
import MediaQuery from 'react-responsive';
import HomeSidebarNavigation from '../HomeSidebarNavigation/HomeSidebarNavigation';
import { StyledHomeSidebarDesktop } from './HomeSidebarDesktop.styles';

const HomeSidebarDesktop = (): React$MixedElement => {
	const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(true);
	const sidebarRef = useRef(null);

	const handleMouseOver = () => {
		setIsCollapsedSidebar(false);
	};

	const handleMouseLeave = () => {
		setIsCollapsedSidebar(true);
	};

	useEffect(() => {
		const sidebarElement = sidebarRef.current;
		if (sidebarElement) {
			sidebarElement.addEventListener('mouseover', handleMouseOver);
			sidebarElement.addEventListener('mouseleave', handleMouseLeave);
			return () => {
				sidebarElement.removeEventListener('mouseover', handleMouseOver);
				sidebarElement.removeEventListener('mouseleave', handleMouseLeave);
			};
		}
	}, []);

	return (
		<ConfigProvider theme={{ token: { colorTextBase: 'white' } }}>
			<MediaQuery minWidth={361}>
				<StyledHomeSidebarDesktop
					width={isCollapsedSidebar ? 65 : 200}
					ref={sidebarRef}
				>
					<HomeSidebarNavigation isCollapsedSidebar={isCollapsedSidebar} />
				</StyledHomeSidebarDesktop>
			</MediaQuery>
		</ConfigProvider>
	);
};

export default HomeSidebarDesktop;
```

<br>
Стили HomeSidebarDesktop.styles.js

```jsx static
import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

export const StyledHomeSidebarDesktop = styled(Sider)`
	overflow: auto;
`;
```

<br>
<br>
