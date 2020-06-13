import React, { useState } from 'react';
import { Card, CardDeck, CardHeader, CardBody } from 'shards-react';

const withResultCard = Component => () => {
	const [form, setForm] = useState('{}');

	const handleSubmit = values => {
		setForm(JSON.stringify(values, null, 2));
	};

	return (
		<div>
			<CardDeck>
				<Card>
					<CardBody>
						<Component handleSubmit={handleSubmit} />
					</CardBody>
				</Card>
				<Card>
					<CardHeader>Result</CardHeader>
					<CardBody><pre style={{ fontSize: '1.5rem', lineHeight: '2rem' }}>{form}</pre></CardBody>
				</Card>
			</CardDeck>
		</div>
	);
};

export default withResultCard;
