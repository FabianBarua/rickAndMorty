import  { useEffect, useState } from 'react';

export const useAstroTheme = () => {

    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'default');

    useEffect(() => {
    const handleThemeChange = (event) => {
        setTheme(event.detail.theme);
    };

    window.addEventListener('astro:theme-change', handleThemeChange);

    return () => {
        window.removeEventListener('astro:theme-change', handleThemeChange);
    };
    }, []);

    return {theme}
}