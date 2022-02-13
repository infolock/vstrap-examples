import '@app-vstrap/styles/bootstrap.css';
import '@app-vstrap/styles/bootstrap-responsive.css';
import { Alert, Button, CloseBtn } from '@app-vstrap/vstrap.js';
import alertTypes from '@app-vstrap/components/Alert/types';

const el = document.body;

el.innerHTML = `
<div id="wrapper">
	<div id="demo-container"></div>
</div>
`;

const closeBtn = CloseBtn();

el.querySelector('#demo-container').innerHTML += alertTypes.map(alertType => {
	const title = alertType.substr(0, 1).toUpperCase() + alertType.substr(1);

	return Alert({
		closeBtn,
		content: `
			<strong>${ title }</strong>
			A simple example of an ${ alertType } alert to start us off.
		`,
		type: alertType
	})
}).join('');

el.querySelector('#demo-container').innerHTML += ['anchor', 'button', 'input', 'reset', 'submit'].map(elType => {
	return Button({
		elType,
		content: elType.substr(0, 1).toUpperCase() + elType.substr(1),
		value: elType
	})
}).join('');
