// @flow

import React from 'react';
import { Flex } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import FiltersSearchListItemUsersInfo from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import { StyledFavoriteButton } from '../FiltersSearchListItem.styles';
import StatusContainer from '../../../../StatusContainer/StatusContainer';
import FiltersSearchListItemStatus from './FitersSearchListItemStatus/FiltersSearchListItemStatus';

interface IFiltersSearchListItemDesktop {
	listData: any;
}

const FiltersSearchListItemDesktop = ({
	listData,
}: IFiltersSearchListItemDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
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
			<Flex gap={20} wrap style={{ maxWidth: '95%' }}>
				{listData.dataSearch.map((item) => (
					<StatusContainer key={item.id}>
						<FiltersSearchListItemStatus item={item} />
					</StatusContainer>
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
	</MediaQuery>
);

export default FiltersSearchListItemDesktop;
