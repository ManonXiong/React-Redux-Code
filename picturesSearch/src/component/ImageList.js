import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />
    })

    return <div className="image-list">{images}</div>
}

export default ImageList;

//Two ways: destructure the "image" object or not
// 1.
// const images = props.images.map(({id, urls, description}) => {
//     return <img key={id}
//       src={urls.regular} 
//       alt={description}
//       />
// 2.
//  const images = props.images.map(image => {
//     return <img key={image.id}
//         src={image.urls.regular} 
//         alt={image.description}
//         />
