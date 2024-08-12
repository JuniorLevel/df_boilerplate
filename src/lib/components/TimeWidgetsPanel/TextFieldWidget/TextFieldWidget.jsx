// @flow

import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface ITextFieldWidgetProps {
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

const TextFieldWidget = ({
	text,
}: ITextFieldWidgetProps): React$MixedElement => (
	<div
		style={{
			border: '1px solid black',
			padding: '10px',
			backgroundColor: 'grey',
		}}
	>
		<StyledParagraph>{text}</StyledParagraph>
	</div>
);

export default TextFieldWidget;
