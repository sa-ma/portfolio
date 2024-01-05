import React from 'react';
import Link from 'next/link';

type Props = {
    data: {
        title: string;
        url: string;
        type?: string;
        date?: string;
    }[];
    type?: 'article' | 'portfolio';
};

const DataList = ({ data, type }: Props) => {
    return (
        <div className='w-full px-4 lg:px-8 py-11'>
            {data.map((item) => (
                <Link
                    key={item.title}
                    href={item.url}
                    target='_blank'
                    className={`${
                        type === 'portfolio' ? 'text-3xl' : 'text-lg'
                    } mb-8 text-typography flex items-center gap-1 before:content-[""] before:w-0 before:h-[1px] before:bg-typography before:transition-width before:ease-in before:duration-200 hover:before:w-8`}
                >
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    );
};

export default DataList;
