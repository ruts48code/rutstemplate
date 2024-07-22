// place files you want to import through the `$lib` alias in this folder.
import { OTP } from 'rutsotp';
import conf from '$lib/config.json';

export const api = async (d) => {
	return await (
		await fetch('/api', {
			method: 'POST',
			body: JSON.stringify(d),
			headers: {
				'Content-Type': 'application/json',
				otp: await OTP(conf.secret[0])
			}
		})
	).json();
};
