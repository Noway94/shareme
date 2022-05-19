export const fetchUser=() =>{
    const userInfo= localStorage.getItem('user') !== 'undfined'? JSON.parse(localStorage.getItem('user')):localStorage.clear();

    return userInfo;
}