import CloseBtn from '@app-components/CloseBtn/';
import alertTypes from './types';

const alertMap = {};

(() => alertTypes.forEach(alertType => alertMap[alertType] = `alert-${ alertType }`))();

const defaultProps = {
	content: '<strong>Bold!</strong> Contents.',
	closeBtn: CloseBtn(),
	type: 'primary'
};

const Alert = (props) => {
	let { content, closeBtn, type } = { ...defaultProps, ...props };

	if (!alertMap.hasOwnProperty(type)) type = 'primary';

	const alertTypeClass = alertMap[type];

	return `
	<div class="alert ${ alertTypeClass }" role="alert">
		${ content }
		${ CloseBtn() }
	</div>
	`;
};

export default Alert;
