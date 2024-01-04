import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' });

export const metadata: Metadata = {
    title: 'Samaila Bala',
    description: 'a portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${nunitoSans.variable} font-sans`}>
                <ThemeProvider defaultTheme='dark' enableSystem disableTransitionOnChange themes={['mono']}>
                    <main className='w-screen h-screen bg-primary'>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
