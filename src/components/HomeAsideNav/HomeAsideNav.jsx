// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { homeAsideRoutes } from './home.aside.nav';

const StyledListItem = styled.li`
	display: flex;
	padding: 5px;
	margin-bottom: 10px;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #3282ff;
	}
`;

interface IHomeAsideNavProps {
	isCollapsedSidebar?: boolean;
}

const HomeAsideNav = ({
	isCollapsedSidebar,
}: IHomeAsideNavProps): React$MixedElement => (
	<nav>
		<ul>
			{homeAsideRoutes.map((route) => (
				<Link key={route.id} to={route.path}>
					<StyledListItem>
						<Button
							type="ghost"
							style={{ borderRadius: '0px', fontSize: '1.5em' }}
						>
							<route.icon />
							<MediaQuery minWidth={361}>
								{!isCollapsedSidebar && <span>{route.name}</span>}
							</MediaQuery>
						</Button>
					</StyledListItem>
				</Link>
			))}
		</ul>
	</nav>
);

export default HomeAsideNav;
