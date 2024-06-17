// @flow

import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import Container from '../../components/Container/Container';
import FiltersCardContainer from '../../components/FiltersCardContainer/FiltersCardContainer';
import FiltersCard from '../../components/FiltersCardContainer/FiltersCard/FiltersCard';
import FiltersCardAddButton from '../../components/FiltersCardContainer/FiltersCardAddButton/FiltersCardAddButton';

const FiltersOpenedPage = (): React.Node => {
	const filterCards = [
		{
			id: 1,
			cardItem: [{ id: 1, text: 'lorem-1' }],
		},

		{
			id: 2,
			cardItem: [
				{ id: 1, text: 'project-1' },
				{ id: 2, text: 'project-2' },
				{ id: 3, text: 'project-3' },
			],
		},
		{
			id: 3,
			cardItem: [
				{ id: 1, text: 'issue-1' },
				{ id: 2, text: 'issue-2' },
			],
		},
		// {
		// 	id: 4,
		// 	cardItem: [
		// 		{ id: 1, text: 'user-1' },
		// 		{ id: 2, text: 'user-2' },
		// 		{ id: 3, text: 'user-3' },
		// 		{ id: 4, text: 'user-4' },
		// 		{ id: 5, text: 'user-5' },
		// 		{ id: 6, text: 'user-6' },
		// 		{ id: 7, text: 'user-7' },
		// 		{ id: 8, text: 'user-8' },
		// 	],
		// },
		// {
		// 	id: 5,
		// 	cardItem: [
		// 		{ id: 1, text: 'guest-1' },
		// 		{ id: 2, text: 'guest-2' },
		// 		{ id: 3, text: 'guest-3' },
		// 		{ id: 4, text: 'guest-4' },
		// 		{ id: 5, text: 'guest-5' },
		// 		{ id: 6, text: 'guest-6' },
		// 		{ id: 7, text: 'guest-7' },
		// 		{ id: 8, text: 'guest-8' },
		// 	],
		// },
		// {
		// 	id: 6,
		// 	cardItem: [
		// 		{ id: 1, text: 'qwerty-1' },
		// 		{ id: 2, text: 'qwerty-2' },
		// 		{ id: 3, text: 'qwerty-3' },
		// 		{ id: 4, text: 'qwerty-4' },
		// 		{ id: 5, text: 'qwerty-5' },
		// 		{ id: 6, text: 'qwerty-6' },
		// 		{ id: 7, text: 'qwerty-7' },
		// 		{ id: 8, text: 'qwerty-8' },
		// 	],
		// },
		// {
		// 	id: 7,
		// 	cardItem: [
		// 		{ id: 1, text: 'qwerty-1' },
		// 		{ id: 2, text: 'qwerty-2' },
		// 		{ id: 3, text: 'qwerty-3' },
		// 		{ id: 4, text: 'qwerty-4' },
		// 		{ id: 5, text: 'qwerty-5' },
		// 		{ id: 6, text: 'qwerty-6' },
		// 		{ id: 7, text: 'qwerty-7' },
		// 		{ id: 8, text: 'qwerty-8' },
		// 	],
		// },
		// {
		// 	id: 8,
		// 	cardItem: [
		// 		{ id: 1, text: 'qwerty-1' },
		// 		{ id: 2, text: 'qwerty-2' },
		// 		{ id: 3, text: 'qwerty-3' },
		// 		{ id: 4, text: 'qwerty-4' },
		// 		{ id: 5, text: 'qwerty-5' },
		// 		{ id: 6, text: 'qwerty-6' },
		// 		{ id: 7, text: 'qwerty-7' },
		// 		{ id: 8, text: 'qwerty-8' },
		// 	],
		// },
	];

	const [cardsCopy, setCardsCopy] = useState(filterCards);

	return (
		<Container>
			<FiltersCardContainer>
				<ReactSortable
					list={cardsCopy}
					setList={setCardsCopy}
					animation={150}
					style={{ display: 'flex', gap: '15px' }}
				>
					{cardsCopy.map((card) => (
						<FiltersCard key={card.id} cardItem={card.cardItem} />
					))}
				</ReactSortable>
				<FiltersCardAddButton />
			</FiltersCardContainer>
		</Container>
	);
};

export default FiltersOpenedPage;
