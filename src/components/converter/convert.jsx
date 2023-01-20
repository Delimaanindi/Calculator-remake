import React from "react";
import './convert.css'
import {TbArrowsRightLeft} from 'react-icons/tb'
import { useState } from "react";

export default function Convert() {
    const [temp, setTemp] = useState('');
    const [temp2, setTemp2] = useState('');
    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('')

    const handleChange = (e) => {
        if(e.target.name === "celsius") {
            setTemp(e.target.value)
        }
        setTemp2(e.target.value)
       
    };

    const converter1 = () => {
        setResult(((9/5) * temp) + 32).toString();
        }   
    const converter2 = () => {
            setResult2((5/9) * (temp2 -32)).toString();
        }   
    
    return(
        <div>
            <h2>Temperature Converter</h2>
            <div className="convert-cont">
                <h4 id="title">Celsius to Fahrenheit</h4>
                <div className="ctof">
                <div className="input-cont">
                    <input type="text" placeholder="celcius" className="inputs" name="celsius"
                    onChange={handleChange}
                     />
                    </div>
                <i id="icon"><TbArrowsRightLeft size={30}/></i>
                <div className="input-cont">
                    <input type="text" className="inputs" placeholder="fahrenheit" value={result}/>
                    </div>
                    <button className="convert" onClick={converter1}>Convert</button>
                    </div>
            </div>
            <div className="convert-cont2">
            <h4 id="title">Fahrenheit to Celsius</h4>
            <div className="ftoc">
                <div className="input-cont">
                    <input type="text" placeholder="fahrenheit" className="inputs" 
                    name="fahrenheit"
                    onChange={handleChange}/>
                    </div>
                <i id="icon"><TbArrowsRightLeft size={30}/></i>
                <div className="input-cont">
                    <input type="text" className="inputs" placeholder="celcius" value={result2}/>
                    </div>
                    <button className="convert" onClick={converter2}>Convert</button>
            </div>
            </div>
        </div>
    )
}