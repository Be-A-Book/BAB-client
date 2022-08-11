const isLogin = () => {
    return !!localStorage.getItem('userId');
};

export default isLogin;