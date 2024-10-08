// @flow

import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface ITextWidgetProps {
	text: string;
}

const { Paragraph } = Typography;
const StyledParagraph = styled(Paragraph)`
	border: 1px solid black;
	padding: 20px;
	background-color: white;
	color: black;
	height: 100%;
	margin: 0 !important;
`;

export const TextWidget = ({ text }: ITextWidgetProps): React.Node => (
	<StyledParagraph>{text}</StyledParagraph>
);
