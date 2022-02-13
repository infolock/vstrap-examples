const defaultProps = {
	accessLabel: "Close",
	classNames: "",
	label: "&times;",
	overrideClasses: false,
};

const CloseBtn = (props) => {
	let { ariaLabel, classNames, label, overrideClasses } = { ...defaultProps, ...props };

	return `
		<button aria-label="${ ariaLabel }" class="${ ['close', classNames.trim()].join(' ') }" data-dismiss="alert" type="button">
			<span aria-hidden="true">${ label }</span>
		</button>
	`;
};

export default CloseBtn;
