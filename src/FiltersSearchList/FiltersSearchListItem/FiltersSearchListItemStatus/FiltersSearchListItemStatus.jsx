// @flow

import React, { useContext, useEffect } from 'react';
import { StatusContext } from '../../../context/StatusContainerContext/StatusContainerContext';
import { useStyles } from '../../filters.search.list.styles';

interface IFiltersSearchListItemStatus {
	item: any;
}

export const FiltersSearchListItemStatus = ({
	item,
}: IFiltersSearchListItemStatus): React.Node => {
	const { setStatus, setRole } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
		setRole(item.role);
	}, [item.status, setStatus, item.role, setRole]);

	const { styles } = useStyles();

	return <div className={styles.filtersSearchListItemStatus}>{item.text}</div>;
};
