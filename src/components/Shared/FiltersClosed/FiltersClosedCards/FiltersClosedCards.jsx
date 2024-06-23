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
