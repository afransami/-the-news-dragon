import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Newscard/Newscard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();

    return (
        <div className='mt-3'>
           {
                categoryNews.map(news =><NewsCard
                key={news._id}
                news= {news}
                ></NewsCard>)                
            }
            
        </div>
    );
};

export default Category;