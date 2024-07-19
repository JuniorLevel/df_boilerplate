Данный компонент является карточками закрытого типа, раскрывающие содержимое при нажатии кнопки
<br>
<br>
При нажатии на кнопку происходит рендер компонента FiltersOpenedCards, тем самым реализовав открытие и закрытие карточки для дальнейшего добавления/скрытия содержимого.
<br>
<br>
Пример использования компонента в коде (desktop версия)
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
<br>
Пример кода компонента FiltersClosedCards
<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Flex, Badge, Popover } from 'antd';
import FiltersOpenedCardItem from '../../FiltersOpened/FiltersOpenedCards/FiltersOpenedCardItem/FiltersOpenedCardItem';
import {
	StyledCardsDivPopover,
	StyledCardItemDiv,
	StyledCardsDiv,
} from './FiltersClosedCards.styles';

interface IFiltersCardsClosedProps {
	cardClosed: any;
}

const FiltersClosedCards = ({
	cardClosed,
}: IFiltersCardsClosedProps): React$MixedElement => (
	<Popover
		placement="topRight"
		content={
			<StyledCardsDivPopover>
				{cardClosed.item.map((item) => (
					<StyledCardItemDiv key={item.id}>
						<FiltersOpenedCardItem key={item.id} item={item} />
					</StyledCardItemDiv>
				))}
			</StyledCardsDivPopover>
		}
	>
		<StyledCardsDiv>
			<Flex gap={10} align="center">
				<div>{cardClosed.title}</div>
				<Badge count={cardClosed.item.length} />
			</Flex>
		</StyledCardsDiv>
	</Popover>
);

export default FiltersClosedCards;
```

<br>
<br>
Стили FiltersClosedCards.styles.js

```jsx static
import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCardItemDiv = styled.div`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledCardsDivPopover = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	width: 300px;
	min-height: 350px;
`;

export const StyledCardsDiv = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
`;
```
