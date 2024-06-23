import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
	height: 100vh;
`;

export const StyledContent = styled(Content)`
	overflow: auto;
`;
