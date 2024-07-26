Компонент Container принимает в качестве props children, контентную часть справа от sidebar. Содержит в себе HomeHeader и HomeSidebar.

```jsx
import React from 'react';
import { Container } from '../../components/Container/Container';
import { buttons } from '../../components/Container/buttons';

<Container
	buttons={buttons}
	title="Caption"
	theme="light"
	avatar={{ title: 'AV' }}
>
	<div>Content</div>
</Container>;
```

Пример использования:

```jsx static
const Container = ({ children }) => (
	<StyledLayout>
		<HomeHeader />
		<Layout>
			<HomeSidebar />
			<StyledContent>{children}</StyledContent>
		</Layout>
	</StyledLayout>
);
```

Пример использования HomeHeader:

```jsx static
const HomeHeaderDesktop = () => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

	const onChange = (checked) => {
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
```

Пример использования HomeSidebar:

```jsx static
const HomeSidebarDesktop = () => {
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
```
