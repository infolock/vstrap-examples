import '@app-vstrap/css/bootstrap.css';
import '@app-vstrap/css/bootstrap-responsive.css';
import { Alert, CloseBtn } from '@app-vstrap/vstrap.js';
import alertTypes from '@app-vstrap/components/Alert/types';

const el = document.body;

el.innerHTML = `
<div id="wrapper">
	<div id="alert-container"></div>
</div>
`;

const closeBtn = CloseBtn();

const alertExamples = alertTypes.map(alertType => {
	const title = alertType.substr(0, 1).toUpperCase() + alertType.substr(1);

	return Alert({
		closeBtn,
		content: `
			<strong>${ title }</strong> A simple example of an ${ alertType } alert to start us off.
		`,
		type: alertType
	})
}).join('');

el.querySelector('#alert-container').innerHTML = alertExamples;
