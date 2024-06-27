// @flow
import React, { createContext, useState } from 'react';

interface IStatusProvider {
	children: React.Node;
}

interface IStatusContext {
	status: string;
	setStatus: (newStatus: string) => void;
}

export const StatusContext: React.Context<IStatusContext> =
	createContext<IStatusContext>({
		status: 'updated',
		setStatus: () => {},
	});

export const StatusProvider = ({
	children,
}: IStatusProvider): React$MixedElement => {
	const [status, setStatus] = useState('updated');

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StatusContext.Provider value={{ status, setStatus }}>
			{children}
		</StatusContext.Provider>
	);
};
