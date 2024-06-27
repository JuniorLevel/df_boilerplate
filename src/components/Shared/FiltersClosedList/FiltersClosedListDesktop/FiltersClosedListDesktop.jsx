// @flow

import React, { useContext } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import FiltersCardsContainer from '../../FiltersCardsContainer/FiltersCardsContainer';
import { filterCardsClosed } from '../../../../data/filters.cards.data';
import FiltersClosedCards from '../FiltersClosedCards/FiltersClosedCards';
import FiltersOpenedCards from '../../FiltersOpened/FiltersOpenedCards/FiltersOpenedCards';
import { FiltersClosedListContext } from '../../../../context/FiltersClosedListContext/FiltersClosedListContext';

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
