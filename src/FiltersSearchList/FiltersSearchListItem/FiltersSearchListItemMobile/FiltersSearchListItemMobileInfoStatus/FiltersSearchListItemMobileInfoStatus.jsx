// @flow

import React, { useContext, useEffect } from 'react';
import { StatusContext } from '../../../../context/StatusContainerContext/StatusContainerContext';
import { useStyles } from '../../../filters.search.list.styles';

interface IFiltersSearchListItemMobileInfoStatus {
	item: any;
}

export const FiltersSearchListItemMobileInfoStatus = ({
	item,
}: IFiltersSearchListItemMobileInfoStatus): React.Node => {
	const { setStatus, setCounter, setRole } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
		setCounter(item.counter);
		setRole(item.role);
	}, [item.status, setStatus, item.counter, setCounter, item.role, setRole]);

	const { styles } = useStyles();

	return (
		<div className={styles.filtersSearchListItemMobileInfoStatus}>
			{item.text}
		</div>
	);
};
