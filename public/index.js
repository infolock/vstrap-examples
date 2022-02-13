import '@app-vstrap/styles/bootstrap.css';
import '@app-vstrap/styles/bootstrap-responsive.css';
import AlertDemos from '@app-components/Alert';
import ButtonDemos from '@app-components/Button';

const el = document.body;

el.innerHTML = `
<div id="wrapper" class="container">
	<div id="demo-container"></div>
</div>
`;

el.querySelector('#demo-container').innerHTML += `
	<h1>Alert Demos (with Close Buttons)</h1>
	${  AlertDemos }
`;

el.querySelector('#demo-container').innerHTML += `
	<h1>Button Demos</h1>
	${ ButtonDemos }
`;
