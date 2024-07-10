// @flow

import { Flex, Progress } from 'antd';
import React, { useState } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets2SM = (): React$MixedElement => {
	const [isShowWeeksPanel] = useState(false);
	const isMobile = useMediaQuery({
		query: '(max-width: 480px)',
	});

	return (
		<MediaQuery maxWidth={729}>
			<Flex
				wrap
				align="start"
				justify="center"
				style={{ border: '1px solid black', marginBottom: '20px' }}
				gap={5}
			>
				<Flex
					vertical
					gap={10}
					justify="center"
					style={{ padding: '5px', fontSize: '2em' }}
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
				<Flex style={{ padding: '5px' }}>
					<Flex vertical align="center" gap={10}>
						<div style={{ border: '1px solid black', padding: '5px' }}>
							{isShowWeeksPanel ? (
								<TimeWidgetsWeeksAndYearsPanel />
							) : (
								<Progress
									size={{ width: isMobile ? 6 : 10, height: 50 }}
									percent={100}
									steps={31}
									showInfo={false}
								/>
							)}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets2SM;
