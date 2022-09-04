import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import Success from './Success';
import Error from './Error';

function App() {

    const [response, setResponse] = useState(0); 
    const [error, setError] = useState([])

    let render = (<Form setResponse={setResponse} setError={setError}></Form>);

    if (response == 400) render = (<Error error={error}></Error>)
    else if (response == 200) {
        render = (<Success></Success>)
    }

    return (
        <div className='container'>
            <img className='logo' src='https://www.wavescan.sg/wp-content/uploads/2018/11/wavescan-website.png'/>
            {render}
        </div>
        
    );
}

export default App;
