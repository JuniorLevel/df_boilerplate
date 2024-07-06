// @flow

import React, { useContext, useEffect } from 'react';
import { StatusContext } from '../../../../../../context/StatusContainerContext/StatusContainerContext';

interface IFiltersSearchListItemStatus {
	item: any;
}

const FiltersSearchListItemStatus = ({
	item,
}: IFiltersSearchListItemStatus): React$MixedElement => {
	const { setStatus, setRole } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
		setRole(item.role);
	}, [item.status, setStatus, item.role, setRole]);

	return (
		<div
			style={{
				padding: '15px',
				fontSize: '1.2em',
			}}
		>
			{item.text}
		</div>
	);
};

export default FiltersSearchListItemStatus;
