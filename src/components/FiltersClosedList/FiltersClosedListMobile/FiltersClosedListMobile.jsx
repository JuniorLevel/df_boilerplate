// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import FiltersCardsContainer from '../../FiltersCardsContainer/FiltersCardsContainer';
import { filterCardsClosed } from '../../../data/filters.cards.data';
import FiltersClosedCards from '../FiltersClosedCards/FiltersClosedCards';
import FiltersOpenedCards from '../../FiltersOpened/FiltersOpenedCards/FiltersOpenedCards';

const FiltersClosedListMobile = (): React$MixedElement => {
	const [isOpenCards, setIsOpenCards] = useState(false);

	return (
		<MediaQuery maxWidth={360}>
			<FiltersCardsContainer>
				{!isOpenCards &&
					filterCardsClosed.map((card) => (
						<FiltersClosedCards key={card.id} cardClosed={card} />
					))}
				{isOpenCards &&
					filterCardsClosed.map((card) => (
						<FiltersOpenedCards key={card.id} cardItem={card.item} />
					))}
				{isOpenCards && (
					<Button
						icon={<CloseSquareOutlined />}
						size="small"
						onClick={() => setIsOpenCards(!isOpenCards)}
					/>
				)}
				{!isOpenCards && (
					<Button
						icon={<ArrowsAltOutlined />}
						size="small"
						onClick={() => setIsOpenCards(!isOpenCards)}
					/>
				)}
			</FiltersCardsContainer>
		</MediaQuery>
	);
};
export default FiltersClosedListMobile;
