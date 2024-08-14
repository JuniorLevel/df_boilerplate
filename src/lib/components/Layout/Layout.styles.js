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

export const StyledHomeSidebarDesktop = styled(Layout.Sider)`
	overflow: auto;
`;

export const StyledHomeSidebarNavigationListItem = styled.li`
	display: flex;
	padding: 5px;
	margin-bottom: 10px;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #3282ff;
	}
`;
