import { Alert } from './vstrap.js';
import '@app-styles/bootstrap.css';
import '@app-styles/bootstrap-responsive.css';
const el = document.body;
el.innerHTML = `
<div id="wrapper">
	<div id="alert-container"></div>
</div>
`;

el.querySelector('#alert-container').innerHTML = Alert({
	content: '<strong>Bold!</strong> Here we go!',
});
// el.querySelector(".alert-example").innerHTML = Alert();
