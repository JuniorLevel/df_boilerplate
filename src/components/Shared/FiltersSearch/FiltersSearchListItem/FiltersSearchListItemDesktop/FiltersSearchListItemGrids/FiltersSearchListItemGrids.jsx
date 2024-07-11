// @flow

import { Row, Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import StatusContainer from '../../../../../StatusContainer/StatusContainer';

const StyledCol = styled(Col)`
	&:first-child {
	}
	&:last-child {
		flex: 1;
		max-width: 100%;
	}
`;

const FiltersSearchListItemGrids = (): React$MixedElement => (
	<>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Ant Design</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Ant Design</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={{ flex: 1 }}>
				<StatusContainer>GitHub API</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={8}>
				<StatusContainer>GitHub API</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Learn react</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={12}>
				<StatusContainer>Learn react</StatusContainer>
			</StyledCol>
		</Row>
		<Row gutter={[36, 12]}>
			<StyledCol xs={24} lg={{ flex: 1 }}>
				<StatusContainer>Yandex dzen</StatusContainer>
			</StyledCol>
			<StyledCol xs={24} lg={8}>
				<StatusContainer>JavaScript</StatusContainer>
			</StyledCol>
		</Row>
	</>
);
export default FiltersSearchListItemGrids;
