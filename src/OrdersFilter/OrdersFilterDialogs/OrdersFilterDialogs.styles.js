import styled from 'styled-components';
import { Flex } from 'antd';

export const StyledFlexDesktopDialog = styled(Flex)`
	position: absolute;
	justify-content: center;
	align-items: center;
	top: 0;
	width: 100%;
	height: 100%;
`;

export const StyledDivDesktopDialog = styled.div`
	width: 100%;
	height: 100%;
	max-width: 360px;
	max-height: 500px;
	background-color: #80808063;
	padding: 20px;
	border: 3px solid black;
	overflow: auto;
`;

export const StyledDivMobileDialog = styled.div`
	width: 100%;
	min-height: 100%;
	background-color: #80808063;
	padding: 20px;
`;
