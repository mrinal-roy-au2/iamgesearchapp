import React, {useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY

const FullImage = (image) => {
    console.log("line5: ", image)
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/:${image.match.params.id}&client_id=${API_KEY}`)
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
