const useLogined = (): [key: boolean, login: () => void] => {
	let key: any = localStorage.getItem('jwt');
	const login = () => {
		key = true;
	};
	return [key ? true : false, login];
};

export default useLogined;
