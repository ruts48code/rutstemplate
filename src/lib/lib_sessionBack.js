export const sessionBack = async () => {
	let token = sessionStorage.getItem('token');
	if (token == null) {
		location.href = '/';
	}
};
