'use client';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = ['dark', 'light', 'mono'];

const themeSwitcherBackground = {
    dark: 'bg-white',
    light: 'bg-[#ccc]',
    mono: 'bg-black',
};

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const selectNextTheme = () => {
        const currentIndex = themes.indexOf(theme || 'dark');
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        setTheme(nextTheme);
    };

    const currentTheme = (theme as keyof typeof themeSwitcherBackground) || 'dark';
    return (
        <Button variant='ghost' size='icon' type='button' onClick={() => selectNextTheme()}>
            <span className={`w-4 h-4 rounded-full ${themeSwitcherBackground[currentTheme]}`} />
        </Button>
    );
};

export default ThemeSwitcher;
