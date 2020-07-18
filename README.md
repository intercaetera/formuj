<p align="center">
	<img width="300" height="300" src="https://github.com/intercaetera/formuj/blob/master/formuj-logo.svg">
</p>

# Formuj

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

> Formuj is still work in progress and not production-ready, but ideas, PRs and bugfixes are most welcome.

Formuj is a delightful React form framework and set of patterns built on top of [Formik](https://github.com/jaredpalmer/formik).

- Formuj is **simple**. The schema pattern is very easy to pick up and Formuj does not do much magic under the hood.
- Formuj is **flexible**. There are many ways to inject custom behaviour into the schemas for all of your applications.
- Formuj is **battle-tested**. The schema pattern has been successfully used in production enterprise applications.
- Formuj is **Formik**. At the end of the day, you still have access to the underlying Formik API for complicated functionality.

## Example

```js
import React from 'react';

import Formuj, { Input } from 'formuj';
import required from './validators/required';

const handleSubmit = values => console.log(values);

const Demo = () => {
	return (
		<div>
			<Formuj
				schema={[
					{
						name: 'firstName',
						label: 'First Name',
						component: Input,
					},
					{
						name: 'lastName',
						label: 'Last Name',
						component: Input,
						validators: [required],
					},
				]}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
```

## Credits

Maintainer: [@intercaetera](https://intercaetera.com)

Honourable mention: [@adam-golab](https://github.com/adam-golab) (for help with initial implementation)

[build-badge]: https://img.shields.io/travis/intercaetera/formuj/master.png?style=flat-square
[build]: https://travis-ci.org/intercaetera/formuj

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/formuj

[coveralls-badge]: https://img.shields.io/coveralls/intercaetera/formuj/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/intercaetera/formuj
