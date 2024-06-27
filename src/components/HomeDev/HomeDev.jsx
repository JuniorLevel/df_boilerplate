// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const HomeDev = (): React$MixedElement => (
	<div>
		<header>
			<ul
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '20px',
					padding: '20px',
				}}
			>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/order">Order</Link>
				</li>
				<li>
					<Link to="/FiltersOpenedPage">FiltersOpenedPage</Link>
				</li>
				<li>
					<Link to="/FiltersClosedPage">FiltersClosedPage</Link>
				</li>
				<li>
					<Link to="/FiltersClosedPreviewPage">FiltersClosedPreviewPage</Link>
				</li>
				<li>
					<Link to="/DiffOpenedCardsPage">DiffOpenedCardsPage</Link>
				</li>
				<li>
					<Link to="/DiffClosedCardsPage">DiffClosedCardsPage</Link>
				</li>
				<li>
					<Link to="/WelcomePage1">WelcomePage1</Link>
				</li>
				<li>
					<Link to="/WelcomePage2">WelcomePage2</Link>
				</li>
				<li>
					<Link to="/WelcomePage3">WelcomePage3</Link>
				</li>
				<li>
					<Link to="/WelcomePage4">WelcomePage4</Link>
				</li>
				<li>
					<Link to="/WelcomePage5">WelcomePage5</Link>
				</li>
				<li>
					<Link to="/WelcomePage6">WelcomePage6</Link>
				</li>
				<li>
					<Link to="/WelcomePage7">WelcomePage7</Link>
				</li>
				<li>
					<Link to="/WelcomePage8">WelcomePage8</Link>
				</li>
			</ul>
		</header>
		<hr />
	</div>
);

export default HomeDev;
