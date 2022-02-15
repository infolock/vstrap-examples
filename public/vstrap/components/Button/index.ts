import buttonTypes from './types';

const buttonTypeMap:Object = {};

(():void => buttonTypes.forEach(
	(buttonType:string) => buttonTypeMap[buttonType] = `btn-${ buttonType }`)
)();

const defaultProps:Object = {
	elType: 'button',
	value: '',  // this is ONLY for the following elTypes: input, reset, submit
	href: '#',  // this is ONLY for the following elTypes: a, link, anchor
	classNames: '',
	content: 'Button',
	type: 'primary'
};

const BtnEl = (props:Object):string => {
	let { classNames = '', content = '', type = '' } = { ...defaultProps, ...props };

	if (!buttonTypeMap.hasOwnProperty(type)) type = 'primary';

	const buttonTypeClass:string = buttonTypeMap[type];

	return `
	<button type="button" class="${ ['btn', buttonTypeClass, classNames.trim()].join(' ') }">
		${ content }
	</button>
	`;
};

const AnchorEl = (props:Object):string => {
	let { classNames = '', content = '', href = '', type = '' } = { ...defaultProps, ...props };

	if (!buttonTypeMap.hasOwnProperty(type)) type = 'primary';

	const buttonTypeClass:string = buttonTypeMap[type];

	return `
	<a class="${ ['btn', buttonTypeClass, classNames.trim()].join(' ') }" href="${ href }" role="button">
		${ content }
	</a>
	`;
};

const InputEl = (props:Object):string => {
	let { classNames = '', content = '', elType = '', type = '', value = '' } = { ...defaultProps, ...props };

	if (elType === 'input') elType = 'button';

	if (!buttonTypeMap.hasOwnProperty(type)) type = 'primary';

	const buttonTypeClass:string = buttonTypeMap[type];

	return `
		<input type="${ elType }" class="${ ['btn', buttonTypeClass, classNames.trim()].join(' ') }" value="${ value }" />
	`;
};

const elTypeMap:Object = {
	a: AnchorEl,
	anchor: AnchorEl,
	button: BtnEl,
	input: InputEl,
	link: AnchorEl,
	reset: InputEl,
	submit: InputEl
};

const Button = (props:Object):string => {
	let { elType = '' } = { ...defaultProps, ...props };

	if (elTypeMap.hasOwnProperty(elType)) {
		return elTypeMap[elType](props);
	}

	return BtnEl(props);
};

export default Button;
