import ThemeSwitcher from '@/components/theme-switcher';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='w-screen h-screen bg-primary'>
            <div className='absolute bottom-0 left-0 p-4 w-full flex flex-col md:flex-row justify-between items-start md:items-center'>
                <Link href='mailto:samailabalap@gmail.com' className='text-typography'>
                    samailabalap@gmail.com
                </Link>

                <div className='flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2'>
                    <Link className='text-typography' href='/blog'>
                        Writings
                    </Link>
                    <Link className='text-typography' href='/project'>
                        Work
                    </Link>
                </div>

                <div className='flex items-center gap-2'>
                    <Link className='text-typography' href='/about'>
                        Info
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </main>
    );
}
