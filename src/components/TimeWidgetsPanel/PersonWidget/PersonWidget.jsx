// @flow

import React from 'react';
import { Flex, Avatar, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const PersonWidget = (): React$MixedElement => {
	const { Text } = Typography;
	const isMobile = useMediaQuery({
		query: '(max-width: 569px)',
	});

	return (
		<Flex
			wrap
			style={{ border: '1px solid black', padding: '5px' }}
			align="center"
			gap={5}
		>
			<Flex
				style={{
					border: '1px solid black',
					position: 'relative',
					padding: '20px',
					...(isMobile && { flex: '1 0 150px' }),
				}}
			>
				<Text>Assigned</Text>
				<Text
					style={{
						position: 'absolute',
						top: 0,
						left: 5,
						fontSize: '10px',
					}}
				>
					role
				</Text>
			</Flex>
			<Flex
				style={{
					border: '1px solid black',
					padding: '15px',
					flex: '1 1 320px',
				}}
				align="center"
				gap={10}
			>
				<Avatar
					style={{
						border: '1px solid black',
						borderRadius: '50%',
						padding: '5px',
						fontSize: '10px',
						color: 'black',
						backgroundColor: 'white',
					}}
				>
					FIO
				</Avatar>
				<Text>FIO FIO FIO FIO</Text>
			</Flex>
		</Flex>
	);
};

export default PersonWidget;
