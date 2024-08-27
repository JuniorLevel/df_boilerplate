import styled from 'styled-components';
import { Tabs } from 'antd';

export const StyledTabs = styled(Tabs)`
	.ant-tabs-nav {
		padding: 10px;
		margin: 0;
	}
	,
	.ant-tabs-tab {
		padding: 0;
	}
	.ant-tabs-tab-btn {
		padding: 10px;
		border: 1px solid #ccc;
	}
`;
