import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../Newscard/Newscard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            <h1>This category news: {categoryNews.length}</h1>
            {
                categoryNews.map(news =><Newscard
                key={news._id}
                news= {news}
                ></Newscard>)                
            }
            
        </div>
    );
};

export default Category;