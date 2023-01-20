import React from "react";
import './convert.css'
import {TbArrowsRightLeft} from 'react-icons/tb'

export default function Convert() {
    return(
        <div>
            <h2>Temperature Converter</h2>
            <div className="convert-cont">
                <h4 id="title">Celsius to Fahrenheit</h4>
                <div className="ctof">
                <div className="input-cont">
                    <input type="text" placeholder="celcius" className="inputs"/>
                    </div>
                <i id="icon"><TbArrowsRightLeft size={30}/></i>
                <div className="input-cont">
                    <input type="text" className="inputs" placeholder="fahrenheit"/>
                    </div>
                    <button className="convert">Convert</button>
                    </div>
            </div>
            <div className="convert-cont2">
            <h4 id="title">Fahrenheit to Celsius</h4>
            <div className="ftoc">
                <div className="input-cont">
                    <input type="text" placeholder="fahrenheit" className="inputs"/>
                    </div>
                <i id="icon"><TbArrowsRightLeft size={30}/></i>
                <div className="input-cont">
                    <input type="text" className="inputs" placeholder="celcius"/>
                    </div>
                    <button className="convert">Convert</button>
            </div>
            </div>
        </div>
    )
}