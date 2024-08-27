// @flow

import React from 'react';
import MediaQuery from 'react-responsive';

export const OrderListPreviewMobile = (): React$MixedElement => (
	<MediaQuery maxWidth={360} />
);
