// @flow

import React from 'react';

interface ITextFieldWidgetProps {
	text: string;
}

const TextFieldWidget = ({
	text,
}: ITextFieldWidgetProps): React$MixedElement => (
	<div
		style={{
			border: '1px solid black',
			padding: '10px',
			backgroundColor: 'grey',
			fontSize: '1.5em',
			height: '100%',
		}}
	>
		<div
			style={{
				border: '1px solid black',
				padding: '20px',
				backgroundColor: 'white',
				color: 'black',
				height: '100%',
			}}
		>
			{text}
		</div>
	</div>
);

export default TextFieldWidget;
