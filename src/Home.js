import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

    const renderImages = (row, imagesFetched) => {
        if(imagesFetched && imagesFetched.length>0){
        let arrayToRender = []
        for (let j = 0; j < 3; j++) {
            let index = 3*row+j
            arrayToRender.push(
            <Link to={`/fullimage/${imagesFetched[index].id}`}>
                <img 
                src={imagesFetched[index].urls.thumb} 
                alt={imagesFetched[index].alt_description} 
                className='eachImageStyle'
                />
            </Link>
            )
        }
        return (<div className='imageCardStyle'>{arrayToRender}</div>)
        }
    }
    
    return (
        <div className='imageContainerStyle'>
        {[0,1,2].map((eachRow, index) => {
            return(
            renderImages(eachRow, props.imagesFetched)
            )})}
        </div>
    ) 
}

export default Home
