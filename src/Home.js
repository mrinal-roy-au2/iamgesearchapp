import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

    const arrayOfRows = (images) => {
        if(images){
            console.log(images)
            let rowNum = Math.ceil((images.length)/3)
            let arr = []
            for (let i = 0; i < rowNum; i++) {
                arr.push(i)
            }
            console.log(arr)
            return arr
        }
    }

    const renderImages = (row, imagesFetched) => {
        if(imagesFetched && imagesFetched.length>0){
        let arrayToRender = []
        for (let j = 0; j < 3; j++) {
            let index = 3*row+j
            if(imagesFetched[index]){
                console.log("line24: ", imagesFetched[index].id)
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
        }
        return (<div className='imageCardStyle'>{arrayToRender}</div>)
        }
    }
    
    return (
        <div className='imageContainerStyle'>
        {arrayOfRows(props.imagesFetched) && 
        arrayOfRows(props.imagesFetched).map((eachRow, index) => {
            console.log(eachRow)
            return(
            renderImages(eachRow, props.imagesFetched)
            )})}
        </div>
    ) 
}

export default Home
