



export const isLoggedIn = () => {
    const login = JSON.parse(sessionStorage.getItem('data'));
    if (login != null)
        return true;
    else
        return false;
}


export const doLogin = (data) => {

    sessionStorage.setItem('data', JSON.stringify(data));

}


export const isAdmin = () => {
    const login = JSON.parse(sessionStorage.getItem('data'));
    if (login.role === 'admin')
        return true
    else
        return false
}

export const doLogout = () => {
    sessionStorage.removeItem('data');
    window.location.reload()
    
}

