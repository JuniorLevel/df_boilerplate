// @flow

import React, { useContext, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import FiltersCardsContainer from '../FiltersCardsContainer/FiltersCardsContainer';
import FiltersClosedCards from './FiltersClosedCards/FiltersClosedCards';
import FiltersOpenedCards from '../FiltersOpened/FiltersOpenedCards/FiltersOpenedCards';
import { FiltersClosedListContext } from '../../context/FiltersClosedListContext/FiltersClosedListContext';

interface IFiltersClosedProps {
	isOpen: boolean;
	filtersList: any;
}

const FiltersClosed = ({
	isOpen,
	filtersList,
}: IFiltersClosedProps): React$MixedElement => {
	const { isOpenedCards, setIsOpenedCards } = useContext(
		FiltersClosedListContext
	);

	useEffect(() => {
		setIsOpenedCards(isOpen);
	}, [isOpen, setIsOpenedCards]);

	return (
		<MediaQuery minWidth={361}>
			<FiltersCardsContainer>
				<Flex gap="small" style={{ position: 'relative' }}>
					{!isOpenedCards &&
						filtersList.map((card) => (
							<FiltersClosedCards key={card.id} cardClosed={card} />
						))}
					{isOpenedCards &&
						filtersList.map((card) => (
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

export default FiltersClosed;
