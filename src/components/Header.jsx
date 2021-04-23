import React from 'react';
import './css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

const AnchorToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  href="#"
	  className="p-2 small"
	  ref={ref}
	  onClick={(e) => {
		e.preventDefault();
		onClick(e);
	  }}
	>
	  {children}
	  &#x25bc;
	</a>
));

const InlineDropDown = React.forwardRef(({children}, ref) => (
	<ButtonGroup className="mr-3" ref={ref}>
		{children}
	</ButtonGroup>
));

function Header() {
	return (
		<div className="header-area">
			<Container>
				<Row>
					<Col md={8}>
						<div className="user-menu">
						<ul>
					<li>
					<Button as={Link} variant="outline-secondary" >
						<FontAwesomeIcon icon="user" /> My Account
					</Button>
					</li>
					<li>
					<Button as={Link} variant="outline-secondary" >
						<FontAwesomeIcon icon="heart" /> Wishlist
					</Button>
					</li>
					<li>
					<Button as={Link} variant="outline-secondary" >
						<FontAwesomeIcon icon="shopping-cart" /> My Cart
					</Button>
					</li>
					<li>
					<Button as={Link} variant="outline-secondary" >
						<FontAwesomeIcon icon="credit-card" /> Checkout
					</Button>
					</li>
					<li>
					<Button as={Link} variant="outline-secondary" >
						<FontAwesomeIcon icon="sign-in-alt" /> Login
					</Button>
					</li>
				</ul>
						</div>
					</Col>
					<Dropdown as={InlineDropDown}>
					<Dropdown.Toggle as={AnchorToggle}>
						Currency:{' '}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item as="button">$ USD</Dropdown.Item>
						<Dropdown.Item as="button">₹ INR</Dropdown.Item>
						<Dropdown.Item as="button">￡ GBP</Dropdown.Item>
						<Dropdown.Item as="button">$ CAN</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown as={InlineDropDown}>
					<Dropdown.Toggle as={AnchorToggle}>
						Language:{' '}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item as="button">English</Dropdown.Item>
						<Dropdown.Item as="button">French</Dropdown.Item>
						<Dropdown.Item as="button">German</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				</Row>
			</Container>
		</div>
	);
  }

export default Header;
