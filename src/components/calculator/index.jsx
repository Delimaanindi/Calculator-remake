import './calculator.css'
import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import {RxCross2} from 'react-icons/rx'
import {TbDivide, TbEqual} from 'react-icons/tb'
import {RiDeleteBack2Line} from 'react-icons/ri'

export default function Calculator() {
    return(
        <div>
            <div className='cont'>
                <section className='screen'>
                    
                </section>
                <section className='operators'>
                    <div className='G-op'>
                        <button className='op-btn'>
                            <AiOutlinePlus size={25}/>
                        </button>
                        <button className='op-btn'>
                            <AiOutlineMinus size={25}/>
                        </button>
                    </div>
                    <div className='G-op'>
                        <button className='op-btn'>
                            <RxCross2 size={25}/>
                        </button>
                        <button className='op-btn'>
                            <TbDivide size={25}/>
                        </button>
                    </div>
                    <div className='G-op'>
                        <button className='op-btn'>
                            <RiDeleteBack2Line size={25}/>
                        </button>
                        <button className='op-btn'>
                            <TbEqual size={25}/>
                        </button>
                    </div>
                    </section>        
            </div>
        </div>
     
    )
}