// @flow

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button } from 'antd';
import styles from './WidgetContainer.module.scss';

interface IWidgetContainerProps {
	children: React.Node;
	actionOnBody?: boolean;
}

export const WidgetContainer = ({
	children,
	actionOnBody,
}: IWidgetContainerProps): React.Node => {
	const isMobile = useMediaQuery({
		query: '(max-width: 360px)',
	});

	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
			<div className={actionOnBody ? styles.panelActionOnBody : styles.panel}>
				{!isMobile && (
					<Button
						ghost
						size="large"
						className={styles.closeBtn}
						icon={<CloseCircleOutlined />}
					/>
				)}
				<Button
					ghost
					size="large"
					className={styles.moreBtn}
					icon={<MoreOutlined />}
				/>
			</div>
		</div>
	);
};
