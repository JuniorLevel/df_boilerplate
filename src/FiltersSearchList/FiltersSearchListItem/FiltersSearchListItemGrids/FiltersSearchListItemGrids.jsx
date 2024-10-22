// @flow

import { Row, Col } from 'antd';
import React from 'react';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';
import { useStyles } from '../../filters.search.list.styles';

interface IFiltersSearchListItemGridsProps {
	text: string;
}

export const FiltersSearchListItemGrids = ({
	text,
}: IFiltersSearchListItemGridsProps): React.Node => {
	const { styles } = useStyles();

	return (
		<>
			<Row gutter={[36, 12]}>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainer>{text}</StatusContainer>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainer>{text}</StatusContainer>
				</Col>
			</Row>
			<Row gutter={[36, 12]}>
				<Col
					className={styles.filtersSearchListItemGrids}
					xs={24}
					lg={{ flex: 1 }}
				>
					<StatusContainer>{text}</StatusContainer>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={8}>
					<StatusContainer>{text}</StatusContainer>
				</Col>
			</Row>
			<Row gutter={[36, 12]}>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainer>{text}</StatusContainer>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainer>{text}</StatusContainer>
				</Col>
			</Row>
			<Row gutter={[36, 12]}>
				<Col
					className={styles.filtersSearchListItemGrids}
					xs={24}
					lg={{ flex: 1 }}
				>
					<StatusContainer>{text}</StatusContainer>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={8}>
					<StatusContainer>{text}</StatusContainer>
				</Col>
			</Row>
		</>
	);
};
