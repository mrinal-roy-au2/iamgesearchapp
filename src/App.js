import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import FullImage from './FullImage';
import Home from './Home';
const API_KEY = process.env.REACT_APP_API_KEY


function App() {
  const [imagesFetched, setImagesFetched] = useState([])
  const [userInputText, setuserInputText] = useState('')
  const [imageToDisplay, setimageToDisplay] = useState([])

  const searchHandler = (event) => {
    console.log(userInputText)
    event.preventDefault()
    axios.get(`https://api.unsplash.com/search/photos?&query=${userInputText}&per_page=9&client_id=${API_KEY}`)
          .then((response) => {
            console.log('Unsplash API call response: ', response.data.results)
            setImagesFetched(response.data.results)
            setimageToDisplay(response.data.results)
          })
          .catch((error) => console.log(error))
  }

  const userInputHandler = (event) => {
    console.log('userTextInput update: ', event)
    setuserInputText(event.target.value)
  }

  return (
    <div>
    <div className='userInputStyle'>
    <form onSubmit={searchHandler}>
      <input type='text' placeholder='Search Image Here ...' onChange={userInputHandler} />
    </form>
    </div>
    <Router>
    {imagesFetched && imagesFetched.length > 0 && imageToDisplay && imageToDisplay.length>0 &&
      <Home imagesFetched={imagesFetched} />
    }
        <div className='imageCardStyle'>
        <Switch><Route path='/' exact component={Home} />
          <Route path='/fullimage' exact component={FullImage} />
          <Route path='/fullimage/:id' component={FullImage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;