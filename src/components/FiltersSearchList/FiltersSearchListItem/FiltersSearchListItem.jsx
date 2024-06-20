// @flow

import React from 'react';
import { Flex, Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import style from 'styled-components';
import FiltersSearchListItemUsersInfo from './FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';

interface IFiltersSearchListProps {
	listData: any;
}

const StyledFavoriteButton = style(Button)`
position: absolute;
border: none;
`;

const FiltersSearchListItem = ({
	listData,
}: IFiltersSearchListProps): React.Node => (
	<Flex
		vertical
		justify="space-between"
		gap={20}
		style={{
			width: '100%',
			position: 'relative',
			padding: '10px',
		}}
	>
		<Flex gap={20} wrap style={{ maxWidth: '90%' }}>
			{listData.dataSearch.map((item) => (
				<div
					key={item.id}
					style={{
						border: '1px solid black',
						padding: '5px',
						fontSize: '1.2em',
					}}
				>
					{item.text}
				</div>
			))}
		</Flex>
		<FiltersSearchListItemUsersInfo
			dataSearchUsers={listData.dataSearchUsers}
		/>
		<StyledFavoriteButton
			ghost
			style={{
				right: 10,
				color: 'black',
			}}
			icon={<StarOutlined style={{ fontSize: '30px' }} />}
		/>
	</Flex>
);

export default FiltersSearchListItem;
