import './App.css';
import React, { useState, useEffect } from 'react';

function Error(props) {

    return (
        <div className='inputBox'>
            {props.error.map(n => {
                return (
                    <div>
                        {n.param}: {n.msg}
                    </div>
                )
            })}
            <button  className='flex' onClick={() => window.location.reload()}>Back</button>
        </div>
    );
}

export default Error;
