// @flow

import React, { useContext, useEffect } from 'react';
import { StatusContext } from '../../../../context/StatusContainerContext/StatusContainerContext';

interface IFiltersSearchListItemMobileInfoStatus {
	item: any;
}

export const FiltersSearchListItemMobileInfoStatus = ({
	item,
}: IFiltersSearchListItemMobileInfoStatus): React$MixedElement => {
	const { setStatus, setCounter, setRole } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
		setCounter(item.counter);
		setRole(item.role);
	}, [item.status, setStatus, item.counter, setCounter, item.role, setRole]);
	return <div style={{ padding: '10px' }}>{item.text}</div>;
};
