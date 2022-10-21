import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Sheared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h3>This is Category {categoryNews.length} </h3>
            {
                categoryNews.map(news =><NewsSummaryCard
                key={news._id} news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;