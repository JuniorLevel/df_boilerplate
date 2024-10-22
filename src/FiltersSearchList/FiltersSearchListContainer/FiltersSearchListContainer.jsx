// @flow

import React, { useContext } from 'react';
import { FiltersSearchList } from '../FiltersSearchList';
import { useStyles } from '../filters.search.list.styles';
import { ThemeContext } from '../../context/theme/ThemeContext';

interface IFiltersSearchListContainerProps {
	children: React.Node;
}

export const FiltersSearchListContainer = ({
	children,
}: IFiltersSearchListContainerProps): React.Node => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContext);

	return (
		<div
			className={
				isFooter
					? styles.filtersSearchListContainerWithFooter
					: styles.filtersSearchListContainer
			}
		>
			<FiltersSearchList>{children}</FiltersSearchList>
		</div>
	);
};
