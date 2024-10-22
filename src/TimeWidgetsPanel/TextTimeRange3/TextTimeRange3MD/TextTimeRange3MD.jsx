// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';
import styles from './TextTimeRange3MD.module.scss';

interface ITextTimeRange3MDProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange3MD = ({
	text,
	fullDate,
}: ITextTimeRange3MDProps): React.Node => (
	<MediaQuery minWidth={968} maxWidth={1223}>
		<Flex align="center" gap={20} className={styles.container} justify="center">
			<div className={styles.content}>
				<TextWidget text={text} />
			</div>
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
