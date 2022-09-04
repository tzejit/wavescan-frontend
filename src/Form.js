import './App.css';
import Api from './Api';
import React, {useState, useEffect} from 'react';

function Form(props) {

    const [projectName, setprojectName] = useState("");
    const [scanningMode, setscanningMode] = useState("Gantry");
    const [scanDimensionsX , setscanDimensionsX ] = useState(0);
    const [scanDimensionsY, setscanDimensionsY] = useState(0);
    const [scannerFrequency, setscannerFrequency] = useState(0);

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await Api({
                method: 'post',
                url: '/forms/submit',
                data: {projectName, scanningMode, scanDimensionsX, scanDimensionsY, scannerFrequency}
            })
            props.setResponse(res.status)
        } catch (error) {
            props.setResponse(error.response.status)
            console.log(error.response)
            props.setError(error.response.data.errors)
           
        }

    }

    const onFieldChange = (func) => {
        return (e) => func(e.target.value);
    }

    return (
        <div className='inputBox'>
            <form className="form" onSubmit={onFormSubmit}>
                <div className='flex text'>
                    <span>Project Name</span>
                </div>
                <input className='flex' onChange={onFieldChange(setprojectName)}></input>
                <div className='flex text'>
                    <span>Scanning Mode</span>
                </div>
                <select className='flex' onChange={onFieldChange(setscanningMode)}>
                    <option>Gantry</option>
                    <option>Crawler</option>
                    <option>Auto</option>
                    <option>Manual</option>
                    <option>Arm</option>
                </select>
                <div className='flex text'>
                    <span>Scan Dimensions (cm)</span>
                </div>
                <div className='flex multiple'>
                    <label>x</label><input onChange={onFieldChange(setscanDimensionsX)}></input>
                    <label>y</label><input onChange={onFieldChange(setscanDimensionsY)}></input>
                </div>
                <div className='flex text'>
                    <span>Scanner Frequency (GHz)</span>
                </div>
                <input  className='flex' onChange={onFieldChange(setscannerFrequency)}></input>
                <button  className='flex' type="submit" id="postSubmitButton">Scan</button>
            </form>     
        </div>
    );
}

export default Form;
