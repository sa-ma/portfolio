import PageNavigation from '@/components/page-navigation';
import DataList from '@/components/data-list';
import React from 'react';
import { portfolio } from '@/lib/site-data';

const Portfolio = () => {
    return (
        <div>
            <PageNavigation />
            <DataList type='portfolio' data={portfolio} />
        </div>
    );
};

export default Portfolio;
