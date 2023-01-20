import './calculator.css'
import React, {useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import {RxCross2} from 'react-icons/rx'
import {TbDivide, TbEqual} from 'react-icons/tb'
import {RiDeleteBack2Line} from 'react-icons/ri'

export default function Calculator() {
    const [count, setCount] = useState("");
    const [result, setResult] = useState("");
    

    const ops = ["+", "-", "*", "/"];

    const updateCount = (value) => {
        if(ops.includes(value) && count === '' ||
            ops.includes(value) && ops.includes(count.slice(-1))
            )
            {
                return;
            }
        setCount(count + value);
    };

    const equalHandler = () => {
        setResult("=" + " " + eval(count).toString());
    }; 

    const opsHandler = (name) => {
        if(name === "add") {
            updateCount(ops[0])
        } else 
        if(name === "sub") {
            updateCount(ops[1])
        }
        else 
        if(name === "times") {
            updateCount(ops[2])
        }
        else 
        if(name === "div") {
            updateCount(ops[3])
        }
    };

    const numHandler = (e) => {
        if(e.target.name === "1") {
            updateCount("1")
        }
        else if(e.target.name === "2") {
            updateCount("2")
        }
        else if(e.target.name === "3") {
            updateCount("3")
        }
        else if(e.target.name === "4") {
            updateCount("4")
        }
        else if(e.target.name === "5") {
            updateCount("5")
        }
        else if(e.target.name === "6") {
            updateCount("6")
        }
        else if(e.target.name === "7") {
            updateCount("8")
        }
        else if(e.target.name === "8") {
            updateCount("8")
        }
        else if(e.target.name === "9") {
            updateCount("9")
        }
        else if(e.target.name === "0") {
            updateCount("0")
        }
    };

    function deleteHandler() {
        setCount('')
        setResult('')
    }
    function correctionHandler() {
        if(count === '') {
            return;
        }

        const newVal = count.slice(0, -1);

        setCount(newVal);
        setResult('')
    }
    return(
        <div>
            <div className='cont'>
                <section className='screen'>
                    <p>{count || "0"}</p>
                    <p>{''}</p>
                    {result ? 
                    (<p>{result}</p>)
                    : 
                     null}
                </section>
                <section className='btn-cont'>
                <section className='numbers'>
                    <div className='G-num'>
                        <button id="num" name='1' onClick={numHandler}>1</button>
                        <button id="num" name='2' onClick={numHandler}>2</button>
                        <button id="num" name='3' onClick={numHandler}>3</button>
                    </div>
                    <div className='G-num'>
                        <button id="num" name='4' onClick={numHandler}>4</button>
                        <button id="num" name='5' onClick={numHandler}>5</button>
                        <button id="num" name='6' onClick={numHandler}>6</button>
                    </div>
                    <div className='G-num'>
                        <button id="num" name='7' onClick={numHandler}>7</button>
                        <button id="num" name='8' onClick={numHandler}>8</button>
                        <button id="num" name='9' onClick={numHandler}>9</button>
                    </div>
                    <button id="num0" name='0' onClick={numHandler}>0</button>
                </section>
                <section className='operators'>
                    <div className='G-op'>
                        <button className='op-btn' onClick={() => opsHandler("add")}>
                            <AiOutlinePlus size={22}/>
                        </button>
                        <button className='op-btn' onClick={() => opsHandler("sub")}>
                            <AiOutlineMinus size={22}/>
                        </button>
                    </div>
                    <div className='G-op'>
                        <button className='op-btn' onClick={() => opsHandler("times")}>
                            <RxCross2 size={22}/>
                        </button>
                        <button className='op-btn' onClick={() => opsHandler("div")}>
                            <TbDivide size={22}/>
                        </button>
                    </div>
                    <div className='G-op'>
                        <button className='op-btn2'>
                            <RiDeleteBack2Line size={22} color={"white"} onClick={correctionHandler}/>
                        </button>
                        <button className='op-btn2' onClick={equalHandler}>
                            <TbEqual size={22} color={"white"} />
                        </button>
                    </div>
                    <button className='op-btn3' onClick={deleteHandler}>C</button>
                    </section>
                    </section>        
            </div>
        </div>
     
    )
}