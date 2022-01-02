import React from 'react';
import { image } from '../Hooks/Images'

const Loading = () => {
    return (
        <img id="loading_gif" src={image.loading} alt="Loading GIF"/>
    )
}

export default Loading