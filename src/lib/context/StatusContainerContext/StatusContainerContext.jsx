// @flow
import React, { createContext, useState } from 'react';

interface IStatusProvider {
	children: React.Node;
}

interface IStatusContext {
	status: string;
	setStatus: (newStatus: string) => void;
	counter: number;
	setCounter: (newCounter: number) => void;
	role: string;
	setRole: (newRole: string) => void;
}

export const StatusContext: React.Context<IStatusContext> =
	createContext<IStatusContext>({
		status: 'updated',
		setStatus: () => {},
		counter: 0,
		setCounter: () => {},
		role: 'Assigned',
		setRole: () => {},
	});

export const StatusProvider = ({
	children,
}: IStatusProvider): React$MixedElement => {
	const [status, setStatus] = useState('updated');
	const [counter, setCounter] = useState(0);
	const [role, setRole] = useState('');

	return (
		<StatusContext.Provider
			// eslint-disable-next-line react/jsx-no-constructed-context-values
			value={{ status, setStatus, counter, setCounter, role, setRole }}
		>
			{children}
		</StatusContext.Provider>
	);
};
