// @flow

import React from 'react';

interface IFiltersSearchContainer {
	children: React.Node;
	height: number;
}

const FiltersSearchContainer = ({
	children,
	height,
}: IFiltersSearchContainer): React$MixedElement => (
	<div style={{ maxHeight: `${height}vh`, height: '100%' }}>{children}</div>
);

export default FiltersSearchContainer;
