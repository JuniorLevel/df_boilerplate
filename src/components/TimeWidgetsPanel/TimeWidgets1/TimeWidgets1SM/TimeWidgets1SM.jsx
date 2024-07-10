// @flow

import React from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { Flex, Progress } from 'antd';

const TimeWidgets1SM = (): React$MixedElement => {
	const isMobile = useMediaQuery({
		query: '(max-width: 480px)',
	});

	return (
		<MediaQuery maxWidth={729}>
			<Flex
				vertical
				style={{
					marginBottom: '20px',
				}}
				gap={5}
			>
				<Flex
					gap={10}
					justify="center"
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
					justify="center"
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
							size={{ width: !isMobile ? 10 : 6, height: 50 }}
							percent={100}
							steps={31}
							showInfo={false}
						/>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets1SM;
