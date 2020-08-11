import React, {useEffect} from 'react';
import axios from 'axios';

const FullImage = (image) => {
    console.log("line5: ", image)
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/:${image.match.params.id}&client_id=VQV7CMB6GN1Gtm5saelkFDUoXngsOQDg7-wTis7ggI8`)
            .then((response) => console.log("useEffect in FullImage", response))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h1>Full Image</h1>
        </div>
    )
}

export default FullImage
