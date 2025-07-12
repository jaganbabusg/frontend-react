import { atom, useAtom } from 'jotai';

const flashMessageAtom = atom({
    message: '',
    type: 'info'
});

export function useFlashMessage() {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);
    // This function will show a flash message for 3 seconds and then clear it.
    const showFlashMessage = (message, type = 'info') => {
        if (message && ['info', 'success', 'warning', 'error'].includes(type)) {
            setFlashMessage({ message, type });
        }
        setTimeout(() => {
            setFlashMessage({ message: '', type: 'info' });
        }, 3000);
    };
    // This function returns the current flash message and its type.
    const getFlashMessage = () => {
        return flashMessage;
    }
    // This function clears the flash message immediately.
    const clearFlashMessage = () => {
        setFlashMessage({ message: '', type: 'info' });
    };
    // This hook provides the flash message functionality.
    return {
        showFlashMessage,
        getFlashMessage,
        clearFlashMessage,
        flashMessage
    };
}