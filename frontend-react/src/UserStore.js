import { atom, useAtom } from 'jotai';
const JWTAtom = new atom('');

export function useJWT() {
    const [JWT, setJWTAtom] = useAtom(JWTAtom);
    //store JWT token in localstorage and in Jotai atom
    const setJWT = (token) => {
        setJWTAtom(token);
        localStorage.setItem('jwt', token);
    };
    // retrieve JWT token from localstorage and Jotai atom
    const getJWT = () => {
        const token = localStorage.getItem('jwt');
        if (token && !JWT) {
            setJWTAtom(token);
        }
        return JWT || token;
    };
    // clear JWT token from localstorage and Jotai atom
    const clearJWT = () => {
        setJWTAtom('');
        localStorage.removeItem('jwt');
    };
    // export functions to set, get, and clear JWT token
    return {
        setJWT,
        getJWT,
        clearJWT
    };
}