import React from 'react';
import articleList from '@/lib/work-data';
import Link from 'next/link';

const ArticleList = () => {
    return (
        <div className='w-full px-8 py-11'>
            {articleList.map((item) => (
                <Link
                    key={item.title}
                    href={item.url}
                    className='text-lg mb-8 text-typography flex items-center gap-1 before:content-[""] before:w-0 before:h-[1px] before:bg-typography before:transition-width before:ease-in before:duration-200 hover:before:w-8'
                >
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    );
};

export default ArticleList;
