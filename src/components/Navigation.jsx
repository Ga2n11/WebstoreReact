import * as React from "react";
import { Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';
import { nanoid } from 'nanoid';

export function RouteLink({ to, children, key, ...props }) {
	return (
		<Nav.Item key={key}>
			<Nav.Link {...props} as={Link} eventKey={to} to={to}>
				{children}
			</Nav.Link>
		</Nav.Item>
	);
}

export const availableURLs = [
	{ href: '/', name: 'Home' },
	{ href: '/catalouge', name: 'Catalouge' },
	{ href: '/search', name: 'Search' }
];

function NavMenu({location}) {

	return (
		<Nav
			fill
			justify
			className="justify-content-center sticky-top bg-white"
			variant="tabs"
			activeKey={location}
		>
			{
				availableURLs.map(({ href, name }) => (
					<RouteLink to={href} key={nanoid()}>
						{name}
					</RouteLink>
				))
			}
		</Nav>
	);
}

export default NavMenu;