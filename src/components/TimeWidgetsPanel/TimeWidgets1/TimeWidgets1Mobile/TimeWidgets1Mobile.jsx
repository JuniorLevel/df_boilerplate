// @flow

import React from 'react';
import { Flex, Progress } from 'antd';
import MediaQuery from 'react-responsive';

const TimeWidgets1Mobile = (): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<Flex
			wrap
			style={{ border: '1px solid black', marginBottom: '20px' }}
			gap={5}
			justify="center"
		>
			<Flex
				gap={10}
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
				align="center"
				style={{
					border: '1px solid black',
					padding: '5px',
					overflow: 'auto',
				}}
			>
				<Flex
					align="center"
					gap={10}
					style={{
						border: '1px solid black',
						padding: '5px',
					}}
				>
					<Progress
						size={{ width: 7, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgets1Mobile;
