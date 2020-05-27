import React, { useState } from 'react';
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
import SomethingElse from './SomethingElse';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const Demo = () => {
	return (
		<div>
			<Navbar type="dark" theme="primary" expand="md">
				<NavbarBrand href="#">Formuj Demo</NavbarBrand>
				<Nav navbar>
					<NavItem>
						<NavLink href="#">
							Signup Form
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href="#">
							Something Else
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>

			<Container style={{padding: '2rem', background: '#eee', height: '100%'}}>
				<SomethingElse />
			</Container>
		</div>
	);
};

render(<Demo/>, document.querySelector('#demo'));
