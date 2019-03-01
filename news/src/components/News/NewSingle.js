import React from 'react';
import CustomCard from '../Card/Card.js'


const openURL = (url) => {
    console.log(`open url: ${url}`);
    // window.open(url, '_blank');
}

const NewSingle = ({item}) => {
    return (
        <CustomCard title={item.title} author={item.author} description={item.description}
            content={item.content} urlToImage={item.urlToImage} publishedAt={item.publishedAt} url={item.url} />
    );
}

export default NewSingle;


