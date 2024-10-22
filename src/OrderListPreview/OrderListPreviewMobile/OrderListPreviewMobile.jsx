// @flow

import React from 'react';
import MediaQuery from 'react-responsive';

export const OrderListPreviewMobile = (): React.Node => (
	<MediaQuery maxWidth={360} />
);
