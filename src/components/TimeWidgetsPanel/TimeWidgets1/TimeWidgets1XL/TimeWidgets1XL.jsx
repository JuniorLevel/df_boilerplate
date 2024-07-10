// @flow

import React from 'react';
import { Flex, Progress } from 'antd';
import MediaQuery from 'react-responsive';

const TimeWidgets1XL = (): React$MixedElement => (
	<MediaQuery minWidth={730}>
		<Flex
			wrap
			style={{
				border: '1px solid black',
				marginBottom: '20px',
			}}
			gap={5}
		>
			<Flex
				gap={10}
				align="center"
				style={{
					border: '1px solid black',
					padding: '15px',
					fontSize: '2em',
				}}
			>
				<span>13</span>
				<span>августа</span>
				<span>1999</span>
			</Flex>
			<Flex
				style={{
					border: '1px solid black',
					padding: '5px',
				}}
			>
				<Flex
					style={{
						border: '1px solid black',
						padding: '5px',
					}}
				>
					<Progress
						size={{ width: 10, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgets1XL;
