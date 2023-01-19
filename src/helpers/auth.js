export const getToken = () => localStorage.getItem('user')

export const setToken = (token) => localStorage.setItem('user', token)

export const deleteToken = () => localStorage.removeItem('user')

export const clearLocal = () => localStorage.clear()
