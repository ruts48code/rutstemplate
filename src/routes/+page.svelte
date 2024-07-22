<script>
	import { api } from '$lib';
	import { onMount } from 'svelte';
	let username = '';
	let password = '';
	let token = null;
	let name = null;
	const loginWeb = async () => {
		let r = await api({
			api: 'login',
			username: username,
			password: password
		});
		if (r.status == 'ok') {
			sessionStorage.setItem('token', r.token);
			sessionStorage.setItem('name', r.name);
			token = r.token;
			name = r.name;
		} else {
			alert(r.status);
		}
	};
	const logoutWeb = async () => {
		sessionStorage.clear();
		token = sessionStorage.getItem('token');
		name = sessionStorage.getItem('name');
	};
	onMount(async () => {
		token = sessionStorage.getItem('token');
		name = sessionStorage.getItem('name');
	});
</script>

<h1>Login Page</h1>
<h2>Name: {name}</h2>
<h2>Token: {token}</h2>
username:<input type="text" bind:value={username} /><br />
password:<input type="password" bind:value={password} /><br />
<button on:click={async () => loginWeb()}>login</button><br /><br />
<button on:click={async () => logoutWeb()}>logout</button>
<hr />
<a href="/user">goto User page</a>
