// AuthService.js
export type UserData = {
    userName: string;
    password: string;
}
const AuthService = {
    login: (user: UserData) => {
      localStorage.setItem('user', JSON.stringify(user));
    },
  
    logout: () => {
      localStorage.removeItem('user');
    },
  
    getUser: () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
  
    isAuthenticated: () => {
      return !!localStorage.getItem('user');
    },
};
  
export default AuthService;
  