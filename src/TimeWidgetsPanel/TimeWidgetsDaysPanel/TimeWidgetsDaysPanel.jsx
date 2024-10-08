// @flow

import React from 'react';
import { Progress } from 'antd';

export const TimeWidgetsDaysPanel = (): React.Node => (
	<Progress
		size={{ width: 10, height: 50 }}
		percent={100}
		steps={31}
		showInfo={false}
	/>
);
