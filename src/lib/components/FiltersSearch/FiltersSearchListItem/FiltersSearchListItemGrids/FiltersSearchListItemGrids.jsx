// @flow

import { Row, Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import StatusContainer from '../../../StatusContainer/StatusContainer';

interface IFiltersSearchListItemGridsProps {
	text: string;
}

const StyledCol = styled(Col)`
	&:first-child {
	}
	&:last-child {
		flex: 1;
		max-width: 100%;
	}
`;

const FiltersSearchListItemGrids = ({
	text,
}: IFiltersSearchListItemGridsProps): React$MixedElement => (
	<>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={{ flex: 1 }}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={8}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={{ flex: 1 }}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={8}>
				<StatusContainer>{text}</StatusContainer>
			</StyledCol>
		</Row>
	</>
);
export default FiltersSearchListItemGrids;
