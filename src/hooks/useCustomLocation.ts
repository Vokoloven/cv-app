import { useLocation } from 'react-router-dom';

export const useCustomLocation = () => {
    const { pathname } = useLocation();
    return pathname;
};
