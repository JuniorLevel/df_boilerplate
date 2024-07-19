Данный компонент состоит из FiltersSearch и блока Preview Page для отображения предпросмотра страницы с результатами поиска
<br>
<br>
Пример использования в коде (desktop версия)

```jsx static
// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import FiltersSearch from '../../FiltersSearch/FiltersSearch';

const FiltersSearchWithPreviewDesktop = (): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Flex gap={10} style={{ height: '100%' }}>
			<Flex
				style={{
					maxWidth: '47%',
					width: '100%',
					overflow: 'auto',
				}}
			>
				<FiltersSearch itemsPerPage={5} />
			</Flex>
			<Flex
				justify="center"
				align="center"
				style={{
					border: '1px solid black',
					width: '100%',
					fontSize: '2rem',
					margin: '10px 10px 0 0',
				}}
			>
				<div>Preview Page</div>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default FiltersSearchWithPreviewDesktop;
```

<br>
<br>
Пример использования компонента

```jsx static
// @flow

import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosedList from '../../components/FiltersClosedList/FiltersClosedList';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';

const FiltersSearchWithPreviewContainer = styled.div`
	height: calc(100vh - 160px);
`;
const FiltersClosedPreviewPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container>
			<FiltersClosedList />
			<FiltersSearchWithPreviewContainer>
				<FiltersSearchWithPreview />
			</FiltersSearchWithPreviewContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPreviewPage;
```
