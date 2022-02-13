import buttonTypes from './types';

const buttonTypeMap = {};
(() => buttonTypes.forEach(buttonType => buttonTypeMap[buttonType] = `btn-${ buttonType }`))();

const defaultProps = {
	elType: 'button',
	value: '',  // this is ONLY for the following elTypes: input, reset, submit
	href: '#',  // this is ONLY for the following elTypes: a, link, anchor
	classNames: '',
	content: 'Button',
	type: 'primary'
};

const BtnEl = (props) => {
	let { classNames, closeBtn, content, type } = { ...defaultProps, ...props };

	if (!buttonTypeMap.hasOwnProperty(type)) type = 'primary';

	const buttonTypeClass = buttonTypeMap[type];

	return `
	<button type="button" class="${ ['btn', buttonTypeClass, classNames.trim()].join(' ') }">
		${ content }
	</button>
	`;
};

const AnchorEl = (props) => {
	let { classNames, closeBtn, content, href, type } = { ...defaultProps, ...props };

	if (!buttonTypeMap.hasOwnProperty(type)) type = 'primary';

	const buttonTypeClass = buttonTypeMap[type];

	return `
	<a class="${ ['btn', buttonTypeClass, classNames.trim()].join(' ') }" href="${ href }" role="button">
		${ content }
	</a>
	`;
};

const InputEl = (props) => {
	let { classNames, closeBtn, content, elType, type, value } = { ...defaultProps, ...props };

	if (elType === 'input') elType = 'button';

	if (!buttonTypeMap.hasOwnProperty(type)) type = 'primary';

	const buttonTypeClass = buttonTypeMap[type];

	return `
		<input type="${ elType }" class="${ ['btn', buttonTypeClass, classNames.trim()].join(' ') }" value="${ value }" />
	`;
};

const elTypeMap = {
	a: AnchorEl,
	anchor: AnchorEl,
	button: BtnEl,
	input: InputEl,
	link: AnchorEl,
	reset: InputEl,
	submit: InputEl
};

const Button = (props) => {
	let { elType } = { ...defaultProps, ...props };

	if (elTypeMap.hasOwnProperty(elType)) {
		return elTypeMap[elType](props);
	}

	return BtnEl(props);
};

export default Button;
