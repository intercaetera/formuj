import React from 'react';
import {render} from 'react-dom';

import { 
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from 'shards-react';
import SignupForm from './SignupForm/SignupForm';
import BasicForm from './BasicForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const Demo = () => {
	return (
		<div>
			<Navbar type="dark" theme="primary" expand="md">
				<NavbarBrand href="#">Formuj Demo</NavbarBrand>
				<Nav navbar>
					<NavItem>
						<NavLink href="#basic-form">
							Basic Form
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href="#signup-form">
							Signup Form
						</NavLink>
					</NavItem>

				</Nav>
			</Navbar>

			<Container style={{padding: '2rem', background: '#eee', height: '100%'}} id="basic-form">
				<h2>Basic Form</h2>
				<BasicForm />
			</Container>

			<Container style={{padding: '2rem', background: '#eee', height: '100%'}} id="signup-form">
				<h2>Signup Form</h2>
				<SignupForm/>
			</Container>
		</div>
	);
};

render(<Demo/>, document.querySelector('#demo'));
