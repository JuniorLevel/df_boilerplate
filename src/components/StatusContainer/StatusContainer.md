Данный компонент служит обёрткой для компонентов, изменяя внешний вид в зависимости от состояния, принимающий в качестве props children. Использует StatusContainerContext.
<br>
<br>
Компонент StatusContainerContext

```jsx static
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
```

<br>
<br>
Пример использования компонента StatusContainer

```jsx static
// @flow

import React from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import StatusContainer from '../../../../StatusContainer/StatusContainer';
import FiltersSearchListItemUsersInfoStatus from '../FiltersSearchListItemUsersInfoDesktop/FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';

interface IFiltersSearchListItemUsersInfoMobile {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfoMobile = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoMobile): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
			{dataSearchUsers.map((user) => (
				<Col xs={24} sm={24} md={24} xl={8} key={user.id}>
					<StatusContainer>
						<FiltersSearchListItemUsersInfoStatus user={user} />
					</StatusContainer>
				</Col>
			))}
		</Row>
	</MediaQuery>
);

export default FiltersSearchListItemUsersInfoMobile;
```

<br>
<br>
Пример компонента StatusContainer в коде. Содержит несколько компонентов, отображающие определённый вид в зависимости от статуса.

```jsx static
// @flow

import React from 'react';
import {
	StatusProvider,
	StatusContext,
} from '../../context/StatusContainerContext/StatusContainerContext';
import StatusUnmodified from './StatusUnmodified/StatusUnmodified';
import StatusChanged from './StatusChanged/StatusChanged';
import StatusUpdated from './StatusUpdated/StatusUpdated';

interface IStatusContainer {
	children: React.Node;
}

const StatusContainer = ({
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

export default StatusContainer;
```

<br>
<br>
Стили StatusContainer.styles.js

```js static
import styled from 'styled-components';
import { Button } from 'antd';

export const StatusUnmodifiedDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: grey;
	border: 1px solid black;
`;

export const StatusChangedDiv = styled.div`
	display: flex;
	background-color: #a3ce00;
	border: 1px solid black;
	position: relative;
`;

export const StatusUpdatedDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #e7b9ac;
	border: 1px solid black;
`;

export const StyledButtonCloseCircle = styled(Button)`
	border: none;
	color: red !important;
	width: 10px !important;
`;

export const StyledButtonCheckCircle = styled(Button)`
	border: none;
	color: green !important;
	width: 10px !important;
`;
```

<br>
<br>
Компонент StatusChanged. Принимает в качестве props children и role (string).

```jsx static
// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex } from 'antd';
import { StatusChangedDiv } from '../StatusContainer.styles';

interface IStatusChanged {
	children: React.Node;
	role: string;
}

const StatusChanged = ({
	children,
	role,
}: IStatusChanged): React$MixedElement => (
	<StatusChangedDiv>
		{role && (
			<Flex
				align="center"
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				{role}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						fontSize: '10px',
					}}
				>
					role
				</div>
			</Flex>
		)}
		<Flex align="center">
			<div
				style={{
					margin: '10px',
					border: '1px solid black',
					borderRadius: '50%',
					padding: '5px',
					fontSize: '10px',
				}}
			>
				FIO
			</div>
			<div>{children}</div>
			<Button
				ghost
				size="large"
				style={{
					border: 'none',
					width: 20,
					position: 'absolute',
					right: 0,
				}}
				icon={<MoreOutlined />}
			/>
		</Flex>
	</StatusChangedDiv>
);

export default StatusChanged;
```

<br>
<br>
Компонент StatusUnmodified. Принимает в качестве props children и counter (number).

```jsx static
// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex, Badge } from 'antd';
import { StatusUnmodifiedDiv } from '../StatusContainer.styles';

interface IStatusUnmodifiedProps {
	children: React.Node;
	counter: number;
}

const StatusUnmodified = ({
	children,
	counter,
}: IStatusUnmodifiedProps): React$MixedElement => (
	<StatusUnmodifiedDiv>
		<Flex align="center">
			<div
				style={{
					margin: '10px',
					border: '1px solid black',
					borderRadius: '50%',
					padding: '5px',
					fontSize: '10px',
				}}
			>
				FIO
			</div>
			<div>{children}</div>
		</Flex>
		<Flex gap={20}>
			{counter > 0 && (
				<Badge
					count={counter}
					color="black"
					style={{ position: 'absolute', top: '9px', right: '-20px' }}
				/>
			)}
			<Button
				ghost
				size="large"
				style={{
					border: 'none',
					width: 20,
				}}
				icon={<MoreOutlined />}
			/>
		</Flex>
	</StatusUnmodifiedDiv>
);

export default StatusUnmodified;
```

<br>
<br>
Компонент StatusUpdated. Принимает в качестве props children и counter (number).

```jsx static
// @flow

import React from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex, Badge } from 'antd';
import {
	StatusUpdatedDiv,
	StyledButtonCloseCircle,
	StyledButtonCheckCircle,
} from '../StatusContainer.styles';

interface IStatusUpdatedProps {
	children: React.Node;
	counter: number;
}

const StatusUpdated = ({
	children,
	counter,
}: IStatusUpdatedProps): React$MixedElement => (
	<StatusUpdatedDiv>
		<Flex align="center">
			<div
				style={{
					margin: '10px',
					border: '1px solid black',
					borderRadius: '50%',
					padding: '5px',
					fontSize: '10px',
				}}
			>
				FIO
			</div>
			<div>{children}</div>
		</Flex>
		<Flex gap={20}>
			<StyledButtonCloseCircle
				ghost
				size="large"
				icon={<CloseCircleOutlined />}
			/>
			<StyledButtonCheckCircle
				ghost
				size="large"
				icon={<CheckCircleOutlined />}
			/>
			{counter > 0 && (
				<Badge
					count={counter}
					color="black"
					style={{ position: 'absolute', top: '9px', right: '-20px' }}
				/>
			)}
			<Button
				ghost
				size="large"
				style={{
					border: 'none',
					width: 20,
				}}
				icon={<MoreOutlined />}
			/>
		</Flex>
	</StatusUpdatedDiv>
);

export default StatusUpdated;
```
