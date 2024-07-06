import styled from 'styled-components';
import { Button } from 'antd';

export const StatusUnmodifiedDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: grey;
	border: 1px solid black;
`;

export const StatusChangedDiv = styled.div`
	display: flex;
	background-color: #a3ce00;
	border: 1px solid black;
	position: relative;
`;

export const StatusUpdatedDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #e7b9ac;
	border: 1px solid black;
`;

export const StyledButtonCloseCircle = styled(Button)`
	border: none;
	color: red !important;
	width: 10px !important;
`;

export const StyledButtonCheckCircle = styled(Button)`
	border: none;
	color: green !important;
	width: 10px !important;
`;
