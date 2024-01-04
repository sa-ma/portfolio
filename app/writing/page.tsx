import PageNavigation from '@/components/page-navigation';
import ArticleList from '@/components/work-list';
import React from 'react';

const Writings = () => {
    return (
        <div className='flex flex-col gap-5'>
            <PageNavigation />
            <ArticleList />
        </div>
    );
};

export default Writings;
