// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import FiltersSearchListItemUsersInfo from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import { StyledFavoriteButton } from '../FiltersSearchListItem.styles';

interface IFiltersSearchListItemMobile {
	listData: any;
}

const FiltersSearchListItemMobile = ({
	listData,
}: IFiltersSearchListItemMobile): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<Flex
			vertical
			justify="space-between"
			gap={20}
			style={{
				position: 'relative',
			}}
		>
			<Flex gap={20} wrap>
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
					top: -5,
					right: -5,
					color: 'black',
				}}
				icon={<StarOutlined style={{ fontSize: '30px' }} />}
			/>
		</Flex>
	</MediaQuery>
);

export default FiltersSearchListItemMobile;
