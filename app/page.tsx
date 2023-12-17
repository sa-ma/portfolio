import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='container'>
            <div className='absolute bottom-0 left-0 p-4 w-full flex justify-between items-center'>
                <Link href='mailto:samailabalap@gmail.com'>samailabalap@gmail.com</Link>

                <div className='flex items-center gap-2'>
                    <Link href='/blog'>Writings</Link>
                    <Link href='/project'>Work</Link>
                </div>

                <div className='flex items-center gap-2'>
                    <Link href='/about'>Info</Link>
                    <Button variant='ghost' size='icon'>
                        <span className='w-4 h-4 rounded-full bg-black' />
                    </Button>
                </div>
            </div>
        </main>
    );
}
