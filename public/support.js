/**
 * @source https://stackoverflow.com/a/14763909/1244184
 * Slightly mondernized version of this great answer...
 */
const detectCSSFeature = (featurename) => {
	const domPrefixes = 'Webkit Moz ms O'.split(' ');
	const domPrefixesLen = domPrefixes.length;
	const elm = document.createElement('div');

	featurename = featurename.toLowerCase();
	if (elm.style[featurename] !== undefined) return true;

	const featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);

	for (let i = 0; i < domPrefixesLen; i++) {
		if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) return true;
	}

	return false;
};

const support = {
	transition: (() => {
		const root = document.body || document.documentElement;
		const thisStyle = root.style;

		const support = detectCSSFeature("transition");
		return support && {
			end: (() => {
				if (typeof thisStyle.transition !== 'undefined') return 'transitionend';
				if (typeof thisStyle.OTransition !== 'undefined') return 'oTransitionEnd';
				if (typeof thisStyle.MozTransition !== 'undefined') return 'transitionend';
				if (typeof thisStyle.WebkitTransition !== 'undefined') return 'webkitTransitionEnd';
				return "TransitionEnd";
			})()
		};
	})()
};

export { detectCSSFeature, support };
