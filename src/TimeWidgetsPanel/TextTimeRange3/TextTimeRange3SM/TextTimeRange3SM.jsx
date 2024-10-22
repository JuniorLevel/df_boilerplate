// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';
import styles from './TextTimeRange3SM.module.scss';

interface ITextTimeRange3SMProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange3SM = ({
	text,
	fullDate,
}: ITextTimeRange3SMProps): React.Node => (
	<MediaQuery maxWidth={967}>
		<Flex vertical gap={20} className={styles.container}>
			<TextWidget text={text} />
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
