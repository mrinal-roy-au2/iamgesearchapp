import React from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY

const FullImage = (image) => {
    console.log("line5: ", image.match.params.id)

    return (
        <div>
            <img 
                src={`https://unsplash.com/photos/${image.match.params.id}/download`}
                alt={image.match.params.alt_description}
            />
            {/* <h1>Full Image</h1>  */}
        </div>
    )
}

export default FullImage
