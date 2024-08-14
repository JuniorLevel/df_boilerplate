// @flow

import React from 'react';
import {
	StatusProvider,
	StatusContext,
} from '../../context/StatusContainerContext/StatusContainerContext';
import { StatusUnmodified } from './StatusUnmodified/StatusUnmodified';
import { StatusChanged } from './StatusChanged/StatusChanged';
import { StatusUpdated } from './StatusUpdated/StatusUpdated';

interface IStatusContainer {
	children: React.Node;
}

export const StatusContainer = ({
	children,
}: IStatusContainer): React$MixedElement => (
	<StatusProvider>
		<StatusContext.Consumer>
			{({ status, counter, role }) => (
				<div>
					{status === 'unmodified' && (
						<StatusUnmodified counter={counter}>{children}</StatusUnmodified>
					)}
					{status === 'changed' && (
						<StatusChanged role={role}>{children}</StatusChanged>
					)}
					{status === 'updated' && (
						<StatusUpdated counter={counter}>{children}</StatusUpdated>
					)}
				</div>
			)}
		</StatusContext.Consumer>
	</StatusProvider>
);
