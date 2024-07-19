Данный компонент служит обёрткой для отображения компонента FiltersClosedList и FiltersOpened на разных разрешениях экрана. В качестве props принимает children (компонент с карточками).
<br>
<br>
Пример использования FiltersCardsContainer
<br>
<br>

```jsx static
// @flow

import React, { useContext } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import FiltersCardsContainer from '../../FiltersCardsContainer/FiltersCardsContainer';
import { filterCardsClosed } from '../../../data/filters.cards.data';
import FiltersClosedCards from '../FiltersClosedCards/FiltersClosedCards';
import FiltersOpenedCards from '../../FiltersOpened/FiltersOpenedCards/FiltersOpenedCards';
import { FiltersClosedListContext } from '../../../context/FiltersClosedListContext/FiltersClosedListContext';

const FiltersClosedListDesktop = (): React$MixedElement => {
	const { isOpenedCards, setIsOpenedCards } = useContext(
		FiltersClosedListContext
	);

	return (
		<MediaQuery minWidth={361}>
			<FiltersCardsContainer>
				<Flex gap="small" style={{ position: 'relative' }}>
					{!isOpenedCards &&
						filterCardsClosed.map((card) => (
							<FiltersClosedCards key={card.id} cardClosed={card} />
						))}
					{isOpenedCards &&
						filterCardsClosed.map((card) => (
							<FiltersOpenedCards key={card.id} cardItem={card.item} />
						))}
					{isOpenedCards && (
						<Button
							icon={<CloseSquareOutlined />}
							size="small"
							onClick={() => setIsOpenedCards(!isOpenedCards)}
							style={{ position: 'absolute', top: 5, right: 5 }}
						/>
					)}
					{!isOpenedCards && (
						<Button
							icon={<ArrowsAltOutlined />}
							size="small"
							onClick={() => setIsOpenedCards(!isOpenedCards)}
							style={{ position: 'absolute', top: 5, right: 5 }}
						/>
					)}
				</Flex>
			</FiltersCardsContainer>
		</MediaQuery>
	);
};

export default FiltersClosedListDesktop;
```

<br>
Пример использования №2

```jsx static
// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { filtersCards } from '../../../data/filters.cards.data';
import FiltersOpenedCards from '../FiltersOpenedCards/FiltersOpenedCards';
import FiltersCardsContainer from '../../FiltersCardsContainer/FiltersCardsContainer';
import FiltersOpenedCardsAddButton from '../FiltersOpenedCards/FiltersOpenedCardsAddButton/FiltersOpenedCardsAddButton';
import { StyledReactSortable } from './FiltersOpenedDesktop.styles';

const FiltersOpenedDesktop = (): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersCards);

	return (
		<MediaQuery minWidth={361}>
			<FiltersCardsContainer>
				<StyledReactSortable
					list={cardsSortable}
					setList={setCardsSortable}
					animation={150}
				>
					{cardsSortable.map((card) => (
						<FiltersOpenedCards key={card.id} cardItem={card.cardItem} />
					))}
				</StyledReactSortable>
				<FiltersOpenedCardsAddButton />
			</FiltersCardsContainer>
		</MediaQuery>
	);
};

export default FiltersOpenedDesktop;
```

<br>

Пример кода компонента FiltersCardsContainer

```jsx static
// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';

interface IFiltersCardsContainerProps {
	children: React.Node;
}

const FiltersCardsContainer = ({
	children,
}: IFiltersCardsContainerProps): React$MixedElement => (
	<>
		<MediaQuery maxWidth={360}>
			<Flex
				justify="center"
				gap="middle"
				style={{
					padding: '10px',
				}}
			>
				{children}
			</Flex>
		</MediaQuery>
		<MediaQuery minWidth={361}>
			<Flex
				gap="middle"
				style={{
					margin: '10px 10px 0 10px',
					overflowX: 'auto',
				}}
			>
				{children}
			</Flex>
		</MediaQuery>
	</>
);

export default FiltersCardsContainer;
```
