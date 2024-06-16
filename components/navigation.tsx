import Link from 'next/link';
import React from 'react';
import ThemeSwitcher from './theme-switcher';

const Navigation = () => {
    return (
        <div className='absolute bottom-0 left-0 p-4 w-full flex flex-col md:flex-row justify-between items-start md:items-center'>
            <Link href='mailto:samailabalap@gmail.com' className='text-typography text-lg'>
                samailabalap@gmail.com
            </Link>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2'>
                <Link className='text-typography text-lg' href='/portfolio'>
                    Work
                </Link>
                <Link className='text-typography text-lg' href='/writing'>
                    Writing
                </Link>
                <Link
                    className='text-typography text-lg'
                    href='https://bit.ly/sama-cv'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Resume
                </Link>
            </div>

            <div className='flex items-center gap-2'>
                <Link className='text-typography text-lg' href='/info'>
                    Info
                </Link>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Navigation;
