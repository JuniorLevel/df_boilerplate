// @flow

import { Typography } from 'antd';
import React from 'react';
import styles from './TextWidget.module.scss';

interface ITextWidgetProps {
	text: string;
}

const { Paragraph } = Typography;

export const TextWidget = ({ text }: ITextWidgetProps): React.Node => (
	<Paragraph className={styles.paragraph}>{text}</Paragraph>
);
