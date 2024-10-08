// @flow
import React, { createContext, useMemo, useState } from 'react';

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

export const StatusProvider = ({ children }: IStatusProvider): React.Node => {
	const [status, setStatus] = useState('updated');
	const [counter, setCounter] = useState(0);
	const [role, setRole] = useState('');

	const value = useMemo(
		() => ({ status, setStatus, counter, setCounter, role, setRole }),
		[status, setStatus, counter, setCounter, role, setRole]
	);

	return (
		<StatusContext.Provider value={value}>{children}</StatusContext.Provider>
	);
};
