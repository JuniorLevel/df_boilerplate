Данный компонент содержит результат поиска, в качестве props принимает число, которое используется для отображения определённого количества результатов поиска на одной странице.
Включает в себя два компонента (варианты отображения на desktop и mobile экранах).
<br>
<br>
Пример использования компонента FiltersSearch

```jsx static
// @flow

import React from 'react';
import FiltersSearchListMobile from './FiltersSearchListMobile/FiltersSearchListMobile';
import FiltersSearchListDesktop from './FiltersSearchListDesktop/FiltersSearchListDesktop';

interface IFiltersSearchProps {
	itemsPerPage?: number;
}

const FiltersSearch = ({
	itemsPerPage = 1,
}: IFiltersSearchProps): React$MixedElement => (
	<>
		<FiltersSearchListMobile />
		<FiltersSearchListDesktop itemsPerPage={itemsPerPage} />
	</>
);

export default FiltersSearch;
```

<br>
<br>
Пример компонента FiltersSearch в коде (desktop версия)

```jsx static
// @flow

import React, { useState } from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import FiltersSearchListItem from '../FiltersSearchListItem/FiltersSearchListItem';
import { searchListData } from '../../../data/search.list.data';

interface IFiltersSearchListDesktop {
	itemsPerPage: number;
}

const FiltersSearchListDesktop = ({
	itemsPerPage,
}: IFiltersSearchListDesktop): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
		<MediaQuery minWidth={361}>
			<Flex
				vertical
				justify="space-between"
				gap={10}
				style={{
					height: '100%',
					overflow: 'auto',
					padding: 10,
				}}
			>
				<div
					style={{
						overflowX: 'hidden',
					}}
				>
					{currentItems.map((listData) => (
						<FiltersSearchListItem listData={listData} key={listData.id} />
					))}
				</div>
				<Flex justify="start">
					<Pagination
						defaultCurrent={1}
						current={currentPage}
						total={totalItems}
						pageSize={itemsPerPage}
						onChange={(page) => setCurrentPage(page)}
					/>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default FiltersSearchListDesktop;
```

<br>
<br>
Пример компонента FiltersSearchListItem (desktop версия). Содержит в себе два компонента:
- FiltersSearchListItemGrids (Компонент с гридами );
- FiltersSearchListItemUsersInfo (Компонент с информацией о пользователях).

```jsx static
// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import FiltersSearchListItemUsersInfo from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import FiltersSearchListItemGrids from './FiltersSearchListItemGrids/FiltersSearchListItemGrids';

interface IFiltersSearchListItemDesktop {
	listData: any;
}

const FiltersSearchListItemDesktop = ({
	listData,
}: IFiltersSearchListItemDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Flex vertical gap={20}>
			<FiltersSearchListItemGrids />
			<FiltersSearchListItemUsersInfo
				dataSearchUsers={listData.dataSearchUsers}
			/>
		</Flex>
	</MediaQuery>
);

export default FiltersSearchListItemDesktop;
```

<br>
<br>
Стили FiltersSearchListItem.styles.js

```jsx static
import styled from 'styled-components';
import { Button } from 'antd';

export const StyledFavoriteButton = styled(Button)`
	position: absolute;
	border: none;
`;
```

<br>
<br>
Пример компонента FiltersSearchListItemGrids

```jsx static
// @flow

import { Row, Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import StatusContainer from '../../../../StatusContainer/StatusContainer';

const StyledCol = styled(Col)`
	&:first-child {
	}
	&:last-child {
		flex: 1;
		max-width: 100%;
	}
`;

const FiltersSearchListItemGrids = (): React$MixedElement => (
	<>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Ant Design</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Ant Design</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={{ flex: 1 }}>
				<StatusContainer>GitHub API</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={8}>
				<StatusContainer>GitHub API</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Learn react</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Learn react</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={{ flex: 1 }}>
				<StatusContainer>Yandex dzen</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={8}>
				<StatusContainer>JavaScript</StatusContainer>
			</StyledCol>
		</Row>
	</>
);
export default FiltersSearchListItemGrids;
```

<br>
<br>
Пример компонента FiltersSearchListItemUsersInfo (desktop версия). Принимает в качестве props массив объектов с информацией о пользователях.

```jsx static
// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import StatusContainer from '../../../../StatusContainer/StatusContainer';
import FiltersSearchListItemUsersInfoStatus from './FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';

interface IFiltersSearchListItemUsersInfoDesktop {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfoDesktop = ({
	dataSearchUsers,
}: IFiltersSearchListItemUsersInfoDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
			{dataSearchUsers.map((user) => (
				<Col flex={1} key={user.id}>
					<StatusContainer>
						<FiltersSearchListItemUsersInfoStatus user={user} />
					</StatusContainer>
				</Col>
			))}
		</Row>
	</MediaQuery>
);

export default FiltersSearchListItemUsersInfoDesktop;
```
