import alertTypes from '@app-vstrap/components/Alert/types';
import { Alert, CloseBtn } from '@app-vstrap/vstrap.js';

const closeBtn = CloseBtn();

const AlertDemos = alertTypes.map(alertType => {
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

export default AlertDemos;
