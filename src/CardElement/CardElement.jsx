// @flow

import MoreOutlined from '@ant-design/icons/MoreOutlined';
import styled from 'styled-components';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'antd';

interface ICardElementProps {
	title: string | React.Node;
	actionOnBody?: boolean;
	children?: React.Node;
}

const StyledDiv = styled.div`
	display: flex;
	gap: 5px;
	position: relative;
	align-items: center;
	border: 5px solid black;
	padding: 5px;
`;

export const CardElement = ({
	title,
	actionOnBody,
	children,
}: ICardElementProps): React.Node => {
	const isMobile = useMediaQuery({
		query: '(max-width: 360px)',
	});

	return (
		<div
			style={{
				padding: '10px',
				marginBottom: '10px',
			}}
		>
			<StyledDiv
				style={{
					alignItems: `${isMobile ? 'start' : 'center'}`,
				}}
			>
				<div
					style={
						actionOnBody
							? {
									position: 'absolute',
									left: `${isMobile ? '15px' : '35px'}`,
									top: `${isMobile ? '15px' : '40%'}`,
									zIndex: 10,
								}
							: {}
					}
				>
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
				<div style={{ width: '100%' }}>{title}</div>
			</StyledDiv>
			{children}
		</div>
	);
};
