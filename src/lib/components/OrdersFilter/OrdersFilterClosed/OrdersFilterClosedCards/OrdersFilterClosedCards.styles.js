import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCardItemDiv = styled.div`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledCardsDivPopover = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	width: 300px;
	height: 350px;
	overflow: auto;
`;

export const StyledCardsDiv = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
`;
