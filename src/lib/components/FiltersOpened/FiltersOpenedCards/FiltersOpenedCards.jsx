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
