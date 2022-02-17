import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ashwin Kumar',
		lastName: 'Uppala'
	}
});

export default app;