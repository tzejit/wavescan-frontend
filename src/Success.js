import './App.css';
import Api from './Api';
import React, { useState, useEffect } from 'react';

function Success() {

    const [link, setLink] = useState("")

    useEffect(() => {
        getImage();
      }, [])
    
    const getImage = async (e) => {
        try {
            let res = Api({
                method: 'get',
                url: '/forms/image'
            })
            setLink((await res).data.link)
        } catch (error) {
             console.log(error)
        }

    }

    return (
        <div className='inputBox'>
            <iframe src={link} width="640" height="480" allow="autoplay"></iframe>
            <button  className='flex' onClick={()=>window.location.reload()}>Back</button>
        </div>
    );
}

export default Success;
