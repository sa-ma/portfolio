import PageNavigation from '@/components/page-navigation';
import DataList from '@/components/data-list';
import React from 'react';
import { articles } from '@/lib/site-data';

const Writings = () => {
    return (
        <div>
            <PageNavigation />
            <DataList data={articles} />
        </div>
    );
};

export default Writings;
