// @flow

import React from 'react';
import { WidgetContainer } from '../WidgetContainer/WidgetContainer';
import { TextTimeRange1 } from '../../TimeWidgetsPanel/TextTimeRange1/TextTimeRange1';

export const CardTitle = (): React.Node => (
	<WidgetContainer>
		<TextTimeRange1 text="" fullDate={{ date: '13.08.99', time: '20:55:55' }} />
	</WidgetContainer>
);
