import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const AuthStore = (set) => ({
    user : JSON.parse(localStorage.getItem('user-info')),
    login:(user) => set({user}) ,
    logout:() => set({user:null}),
    setUser:(user) => set({user})
})

const useAuthStore = create(devtools(AuthStore));
export default useAuthStore;