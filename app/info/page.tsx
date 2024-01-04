import PageNavigation from '@/components/page-navigation';
import Link from 'next/link';
import React from 'react';

const Info = () => {
    return (
        <div className=''>
            <PageNavigation />
            <div className='text-typography text-2xl lg:w-1/2 px-8'>
                <p className='mb-4'>
                    Samaila Bala is a Software Engineer with over three years of experience across Prop-Tech, FinTech,
                    and Web3 startups. Specializing in crafting exceptional frontend and mobile applications, I thrive
                    on pushing boundaries and reshaping user experiences.
                </p>

                <p>
                    My journey through diverse industries has honed my expertise in navigating complex technological
                    landscapes. I&apos;m passionate about leveraging innovation to redefine industry standards. Join me
                    in creating the future of technology—one line of code at a time.
                </p>
            </div>

            <div className='relative lg:fixed bottom-0 p-8 flex gap-2 lg:gap-8 mt-6 flex-wrap'>
                <Link
                    href='https://www.linkedin.com/in/samabalap/'
                    target='_blank'
                    className='block text-typography text-2xl border-b border-b-transparent transition ease-in duration-300 hover:border-b-typography'
                >
                    LinkedIn
                </Link>
                <Link
                    href='https://github.com/sa-ma'
                    target='_blank'
                    className='text-typography text-2xl border-b border-b-transparent transition ease-in duration-300 hover:border-b-typography'
                >
                    GitHub
                </Link>
                <Link
                    href='mailto:samailabalap@gmail.com'
                    target='_blank'
                    className='text-typography text-2xl border-b border-b-transparent transition ease-in duration-300 hover:border-b-typography'
                >
                    Email
                </Link>
                <Link
                    href='https://docs.google.com/document/d/1h4MlEMWSc-xrGBIQuVPQK7w7utjxL3zp2iC-2Mxxkrw/edit?usp=sharing'
                    target='_blank'
                    className='text-typography text-2xl border-b border-b-transparent transition ease-in duration-300 hover:border-b-typography'
                >
                    Resume
                </Link>
            </div>
        </div>
    );
};

export default Info;
