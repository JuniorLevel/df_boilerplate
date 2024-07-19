Данный компонент является карточками открытого типа. Имеет функционал перетаскивания мышкой с помощью библиотеки react-sortable. Компонент содержит список карточек (компонент FiltersOpenedCards) и кнопку добавления содержимого в карточку (компонент FiltersOpenedCardsAddButton)
<br>
<br>
Пример использования в коде (desktop версия)

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
<br>
Стили FiltersOpenedDesktop.styles.js

```jsx static
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';

export const StyledReactSortable = styled(ReactSortable)`
	display: flex;
	gap: 15px;
`;
```

<br>
<br>
Пример кода компонента FilterOpenedCards

```jsx static
// @flow
import React from 'react';
import { Flex } from 'antd';
import FiltersOpenedCardItem from './FiltersOpenedCardItem/FiltersOpenedCardItem';
import FiltersCardAddItemButton from './FiltersCardAddItemButton/FiltersCardAddItemButton';
import { StyledCardDiv, StyledCardItemDiv } from './FiltersOpenedCards.styles';
import StatusContainer from '../../StatusContainer/StatusContainer';

interface IFiltersOpenedCardsProps {
	cardItem: Array<any>;
}

const FiltersOpenedCards = ({
	cardItem,
}: IFiltersOpenedCardsProps): React.Node => (
	<StyledCardDiv>
		<Flex vertical justify="space-between" style={{ minHeight: '295px' }}>
			<div>
				{cardItem.map((item) => (
					<StyledCardItemDiv key={item.id}>
						<StatusContainer>
							<FiltersOpenedCardItem key={item.id} item={item} />
						</StatusContainer>
					</StyledCardItemDiv>
				))}
			</div>
			<FiltersCardAddItemButton />
		</Flex>
	</StyledCardDiv>
);

export default FiltersOpenedCards;
```

<br>
<br>
Стили FiltersOpenedCards.styles.js

```jsx static
import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCardItemDiv = styled.div`
	margin-bottom: 15px;
	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledCardDiv = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	min-width: 318px;
	min-height: 300px;
`;
```

<br>
<br>
Пример кода кнопки добавления (компонент FiltersCardAddItemButton)

```jsx static
// @flow

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import {
	StyledCardsAddButtonMobile,
	StyledCardsAddButtonDesktop,
} from './FiltersOpenedCardsAddButton.styles';

const FiltersOpenedCardsAddButton = (): React$MixedElement => (
	<>
		<MediaQuery maxWidth={360}>
			<StyledCardsAddButtonMobile>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} />
				</Flex>
			</StyledCardsAddButtonMobile>
		</MediaQuery>
		<MediaQuery minWidth={361}>
			<StyledCardsAddButtonDesktop>
				<Flex justify="center" align="center">
					<Button icon={<PlusOutlined />} />
				</Flex>
			</StyledCardsAddButtonDesktop>
		</MediaQuery>
	</>
);

export default FiltersOpenedCardsAddButton;
```

<br>
<br>
Стили FiltersOpenedCardsAddButton.styles.js

```jsx static
import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCardsAddButtonMobile = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	max-height: 100px;
`;

export const StyledCardsAddButtonDesktop = styled(Card)`
	border-radius: 0;
	border-color: black;
	border-width: 3px;
	min-width: 300px;
	min-height: 350px;
	div {
		height: 100%;
	}
`;
```
