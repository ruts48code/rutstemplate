<script>
	import { onMount } from 'svelte';
	import { sessionBack } from '$lib/lib_sessionBack.js';
	let name = '';
	let token = '';
	onMount(async () => {
		sessionBack();
		token = sessionStorage.getItem('token');
		name = sessionStorage.getItem('name');
	});
</script>

<h1>User Page</h1>
<h2>Name : {name}</h2>
<h2>Token : {token}</h2>
