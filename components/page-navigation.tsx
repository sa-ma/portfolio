import React from 'react';
import ThemeSwitcher from './theme-switcher';
import Link from 'next/link';

const PageNavigation = () => {
    return (
        <div className='flex items-center justify-between p-8'>
            <h1 className='text-4xl text-typography'>Samaila Bala</h1>
            <div className='flex items-center gap-2'>
                <ThemeSwitcher />
                <Link href='/' className='text-2xl text-typography'>
                    Close
                </Link>
            </div>
        </div>
    );
};

export default PageNavigation;
