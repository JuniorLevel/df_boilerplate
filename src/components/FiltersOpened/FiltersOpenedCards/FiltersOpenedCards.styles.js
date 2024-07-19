import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCardItemDiv = styled.div`
	margin-bottom: 15px;
	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledCardDiv = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	min-width: 318px;
	min-height: 300px;
`;
