import React from 'react';
import { image } from '../Hooks/Images'

const Loading = () => {
    return (
        <img className="loading_gif" src={image.loading} alt="Loading GIF"/>
    )
}

export default Loading