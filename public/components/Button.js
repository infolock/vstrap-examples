import { Button } from '@app-vstrap/vstrap.js';

const ButtonDemos = ['anchor', 'button', 'input', 'reset', 'submit'].map(elType => {
	return Button({
		elType,
		content: elType.substr(0, 1).toUpperCase() + elType.substr(1),
		value: elType
	})
}).join('');

export default ButtonDemos;
