// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import FiltersCardsContainer from '../../../FiltersCardsContainer/FiltersCardsContainer';
import { filterCardsClosed } from '../../../../../data/filters.cards.data';
import FiltersClosedCards from '../../FiltersClosedCards/FiltersClosedCards';
import FiltersOpenedCards from '../../../FiltersOpened/FiltersOpenedCards/FiltersOpenedCards';

const FiltersClosedListDesktop = (): React$MixedElement => {
	const [isOpenCards, setIsOpenCards] = useState(false);

	return (
		<MediaQuery minWidth={361}>
			<FiltersCardsContainer>
				<Flex gap="small" style={{ position: 'relative' }}>
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
							style={{ position: 'absolute', top: 5, right: 5 }}
						/>
					)}
					{!isOpenCards && (
						<Button
							icon={<ArrowsAltOutlined />}
							size="small"
							onClick={() => setIsOpenCards(!isOpenCards)}
							style={{ position: 'absolute', top: 5, right: 5 }}
						/>
					)}
				</Flex>
			</FiltersCardsContainer>
		</MediaQuery>
	);
};

export default FiltersClosedListDesktop;
