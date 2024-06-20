// @flow

import React from 'react';
import { Card, Flex, Badge, Popover } from 'antd';
import styled from 'styled-components';
import FiltersCardItem from '../FiltersCard/FiltersCardItem/FiltersCardItem';

interface IFiltersCardClosedProps {
	cardClosed: any;
}

const StyledCardItemDiv = styled.div`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;

const FiltersCardClosed = ({
	cardClosed,
}: IFiltersCardClosedProps): React$MixedElement => (
	<Popover
		placement="topRight"
		content={
			<Card
				style={{
					borderRadius: 0,
					borderColor: 'black',
					borderWidth: 3,
					width: 300,
					minHeight: 350,
				}}
			>
				{cardClosed.item.map((item) => (
					<StyledCardItemDiv key={item.id}>
						<FiltersCardItem key={item.id} item={item} />
					</StyledCardItemDiv>
				))}
			</Card>
		}
	>
		<Card
			style={{
				borderRadius: 0,
				borderColor: 'black',
				borderWidth: 3,
			}}
		>
			<Flex gap={10} align="center">
				<div>{cardClosed.title}</div>
				<Badge count={cardClosed.item.length} />
			</Flex>
		</Card>
	</Popover>
);

export default FiltersCardClosed;
