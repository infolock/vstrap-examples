import alertTypes from './types';

const alertMap = {};

(() => alertTypes.forEach(alertType => alertMap[alertType] = `alert-${ alertType }`))();

const defaultProps = {
	classNames: '',
	closeBtn: '', // see the CloseBtn component for an example of what we can pass in here!
	content: '<strong>Bold!</strong> Contents.',
	type: 'primary'
};

const Alert = (props) => {
	let { classNames, closeBtn, content, type } = { ...defaultProps, ...props };

	if (!alertMap.hasOwnProperty(type)) type = 'primary';

	const alertTypeClass = alertMap[type];

	return `
	<div class="${ ['alert', alertTypeClass, classNames.trim()].join(' ') }" role="alert">
		${ content }
		${ closeBtn }
	</div>
	`;
};

export default Alert;
