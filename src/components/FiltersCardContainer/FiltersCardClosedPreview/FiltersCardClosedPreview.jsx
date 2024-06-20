// @flow

import { FullscreenOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface IFiltersCardItemProps {
	item: any;
	onItemClick: any;
}

const StyledItemDiv = styled.div`
	position: relative;
	font-size: 1.5rem;
	padding: 10px;
	border: 2px solid black;
`;

const StyledButton = styled(Button)`
	position: absolute;
	top: 0;
	right: 0;
`;

const FiltersCardClosedPreview = ({
	item,
	onItemClick,
}: IFiltersCardItemProps): React.Node => (
	<button type="button" onClick={onItemClick}>
		<StyledItemDiv>{item.text}</StyledItemDiv>
		<StyledButton type="primary" icon={<FullscreenOutlined />} size="small" />
	</button>
);

export default FiltersCardClosedPreview;
