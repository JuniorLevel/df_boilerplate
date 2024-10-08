// @flow

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button } from 'antd';

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
		<div
			style={{
				position: 'relative',
				display: 'flex',
				alignItems: `${isMobile ? 'start' : 'center'}`,
				gap: 20,
				margin: `10px 0px`,
				padding: '10px',
				backgroundColor: '#c3bfbf',
				border: '5px solid black',
			}}
		>
			<div style={{ width: '100%' }}>{children}</div>
			<div
				style={
					actionOnBody
						? {
								display: 'flex',
								gap: 5,
								position: 'absolute',
								right: '10px',
								top: `${isMobile ? '10px' : '40%'}`,
								zIndex: 10,
							}
						: { display: 'flex', gap: 5 }
				}
			>
				{!isMobile && (
					<Button
						ghost
						size="large"
						style={{
							border: 'none',
							color: 'black',
						}}
						icon={<CloseCircleOutlined style={{ fontSize: '40px' }} />}
					/>
				)}
				<Button
					ghost
					size="large"
					style={{
						width: 20,
						borderRadius: 0,
						borderColor: 'black',
						border: '3px solid black',
						color: 'black',
					}}
					icon={<MoreOutlined style={{ fontSize: '40px' }} />}
				/>
			</div>
		</div>
	);
};
