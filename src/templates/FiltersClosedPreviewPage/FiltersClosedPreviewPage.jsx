// @flow

import React, { useState } from 'react';
import { Button } from 'antd';
import CloseSquareOutlined from '@ant-design/icons/CloseSquareOutlined';
import { ArrowsAltOutlined } from '@ant-design/icons';
import Container from '../../components/Container/Container';
import FiltersCardContainer from '../../components/FiltersCardContainer/FiltersCardContainer';
import FiltersCardClosed from '../../components/FiltersCardContainer/FiltersCardClosed/FiltersCardClosed';
import FiltersSearchListWithPreviewPage from '../../components/FiltersSearchListWithPreviewPage/FiltersSearchListWithPreviewPage';
import FiltersCard from '../../components/FiltersCardContainer/FiltersCard/FiltersCard';

const filterCardsClosed = [
	{
		id: 1,
		title: 'Flow_typed-1',
		item: [{ id: 1, text: 'lorem-1' }],
	},

	{
		id: 2,
		title: 'Flow_typed-2',
		item: [
			{ id: 1, text: 'project-1' },
			{ id: 2, text: 'project-2' },
			{ id: 3, text: 'project-3' },
		],
	},
	{
		id: 3,
		title: 'Flow_typed-3',
		item: [
			{ id: 1, text: 'issue-1' },
			{ id: 2, text: 'issue-2' },
		],
	},
];

const FiltersClosedPreviewPage = (): React$MixedElement => {
	const [isOpenCards, setIsOpenCards] = useState(false);

	return (
		<Container>
			<FiltersCardContainer>
				{!isOpenCards &&
					filterCardsClosed.map((card) => (
						<FiltersCardClosed key={card.id} cardClosed={card} />
					))}
				{isOpenCards &&
					filterCardsClosed.map((card) => (
						<FiltersCard key={card.id} cardItem={card.item} />
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
			</FiltersCardContainer>
			<FiltersSearchListWithPreviewPage />
		</Container>
	);
};

export default FiltersClosedPreviewPage;
