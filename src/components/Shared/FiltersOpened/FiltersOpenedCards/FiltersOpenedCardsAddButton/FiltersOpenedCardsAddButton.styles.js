import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCardsAddButtonMobile = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	max-height: 100px;
`;

export const StyledCardsAddButtonDesktop = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	min-width: 300px;
	min-height: 350px;
	div {
		height: 100%;
	}
`;
