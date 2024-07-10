// @flow

import React from 'react';
import { Flex } from 'antd';
import { useMediaQuery } from 'react-responsive';

const TimeWidgets3 = (): React$MixedElement => {
	const isMobile = useMediaQuery({
		query: '(max-width: 559px)',
	});
	return (
		<Flex
			wrap
			gap={10}
			align="center"
			justify={isMobile ? 'center' : 'start'}
			style={{
				padding: '5px',
				fontSize: '2em',
				border: '1px solid black',
				marginBottom: '20px',
			}}
		>
			<Flex gap={10}>
				<span
					style={{
						border: '1px solid black',
						padding: '10px',
						fontSize: '1.5em',
					}}
				>
					13
				</span>
				<span
					style={{
						border: '1px solid black',
						padding: '10px',
						fontSize: '1.5em',
					}}
				>
					08
				</span>
				<span
					style={{
						border: '1px solid black',
						padding: '10px',
						fontSize: '1.5em',
					}}
				>
					99
				</span>
			</Flex>
			<Flex gap={10}>
				<span
					style={{
						border: '1px solid black',
						padding: '10px',
						fontSize: '1.5em',
					}}
				>
					20
				</span>
				<span
					style={{
						border: '1px solid black',
						padding: '10px',
						fontSize: '1.5em',
					}}
				>
					55
				</span>
				<span
					style={{
						border: '1px solid black',
						padding: '10px',
						fontSize: '1.5em',
					}}
				>
					55
				</span>
			</Flex>
		</Flex>
	);
};

export default TimeWidgets3;
