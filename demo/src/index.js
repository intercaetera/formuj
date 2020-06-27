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

import BasicForm from './BasicForm';
import SignupForm from './SignupForm/SignupForm';
import ConditionalForm from './ConditionalRender/ConditionalForm';

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
				<p>The result of submitting this form will appear in the console.</p>
				<BasicForm />
			</Container>

			<Container style={{padding: '2rem', background: '#eee', height: '100%'}} id="signup-form">
				<h2>Signup Form</h2>
				<p>A basic signup form showcasing the Formuj validators and different components.</p>
				<SignupForm />
			</Container>

			<Container style={{padding: '2rem', background: '#eee', height: '100%'}} id="conditional-form">
				<h2>Conditional Form</h2>
				<p>In this form, the selection of beverages depends on the user age.</p>
				<ConditionalForm />
			</Container>
		</div>
	);
};

render(<Demo/>, document.querySelector('#demo'));
