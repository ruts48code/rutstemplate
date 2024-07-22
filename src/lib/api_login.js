import { json } from '@sveltejs/kit';

export const login = async (d) => {
	try {
		return json(
			await (
				await fetch('https://api.rmutsv.ac.th/elogin', {
					method: 'POST',
					body: JSON.stringify({
						username: d.username,
						password: d.password
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			).json()
		);
	} catch (e) {
		return json({ status: 'error' });
	}
};
