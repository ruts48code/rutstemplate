import { login } from '$lib/api_login.js';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const apiData = await request.json();
	switch (apiData.api) {
		case 'login':
			return login(apiData);
	}
	return json({
		status: 'api'
	});
};
