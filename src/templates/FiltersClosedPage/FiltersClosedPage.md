```jsx
import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import FiltersClosedList from '../../components/FiltersClosedList/FiltersClosedList';
import FiltersSearch from '../../components/FiltersSearch/FiltersSearch';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';

const FiltersSearchContainer = styled.div`
	height: calc(100vh - 150px);
`;

<FiltersClosedListProvider>
	<Container>
		<FiltersClosedList />
		<FiltersSearchContainer>
			<FiltersSearch itemsPerPage={5} />
		</FiltersSearchContainer>
	</Container>
</FiltersClosedListProvider>;
```
