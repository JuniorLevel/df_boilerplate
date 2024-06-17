// @flow
import React, { useState } from 'react';
import { Card, Flex } from 'antd';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';
import FiltersCardItem from './FiltersCardItem/FiltersCardItem';
import FiltersCardAddItemButton from './FiltersCardAddItemButton/FiltersCardAddItemButton';

interface IFiltersCardProps {
	cardItem: Array<any>;
}

const StyledCardItemDiv = styled.div`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;

const FiltersCard = ({ cardItem }: IFiltersCardProps): React.Node => {
	const [cardItemCopy, setCardItemCopy] = useState(cardItem);

	return (
		<div>
			<Card
				style={{
					borderRadius: 0,
					borderColor: 'black',
					borderWidth: 3,
					width: 300,
					minHeight: 350,
				}}
			>
				<Flex vertical justify="space-between" style={{ minHeight: '350px' }}>
					<ReactSortable
						list={cardItemCopy}
						setList={setCardItemCopy}
						animation={150}
					>
						{cardItemCopy.map((item) => (
							<StyledCardItemDiv key={item.id} style={{ marginBottom: '20px' }}>
								<FiltersCardItem key={item.id} item={item} />
							</StyledCardItemDiv>
						))}
					</ReactSortable>
					<FiltersCardAddItemButton />
				</Flex>
			</Card>
		</div>
	);
};

export default FiltersCard;
