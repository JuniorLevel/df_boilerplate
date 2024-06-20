// @flow
import React from 'react';
import { Card, Flex } from 'antd';
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

const FiltersCard = ({ cardItem }: IFiltersCardProps): React.Node => (
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
				<div>
					{cardItem.map((item) => (
						<StyledCardItemDiv key={item.id} style={{ marginBottom: '20px' }}>
							<FiltersCardItem key={item.id} item={item} />
						</StyledCardItemDiv>
					))}
				</div>
				<FiltersCardAddItemButton />
			</Flex>
		</Card>
	</div>
);

export default FiltersCard;
