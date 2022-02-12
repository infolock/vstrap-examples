import { Alert } from './vstrap.js';
import alertTypes from '@app-components/Alert/types';

import '@app-styles/bootstrap.css';
import '@app-styles/bootstrap-responsive.css';

const el = document.body;

el.innerHTML = `
<div id="wrapper">
	<div id="alert-container"></div>
</div>
`;

const alertExamples = alertTypes.map(alertType => {
	const title = alertType.substr(0,1).toUpperCase() + alertType.substr(1);

	return Alert({
		content: `
			<strong>${ title }</strong> A simple example of an ${ alertType } alert to start us off.
		`,
		type: alertType
	})
}).join('');

el.querySelector('#alert-container').innerHTML = alertExamples;
