import React from 'react';
import ThemeSwitcher from './theme-switcher';
import Link from 'next/link';

const PageNavigation = () => {
    return (
        <div className='flex items-center justify-between px-4 lg:px-8 py-8 mb-8'>
            <h1 className='text-xl lg:text-4xl text-typography'>Samaila Bala</h1>
            <div className='flex items-center'>
                <Link href='/' className='text-lg lg:text-2xl text-typography'>
                    Close
                </Link>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default PageNavigation;
