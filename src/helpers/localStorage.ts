import { TOKEN_KEY } from 'src/Constant';

export const isLogin = () => !!window.localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) =>
  window.localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => window.localStorage.getItem(TOKEN_KEY);

export const clearToken = () => window.localStorage.removeItem(TOKEN_KEY);
