import React, { useState } from 'react'
import {v4 as uuid } from 'uuid'

const Formnew = ({todos, setTodos}) => {
    const [input , setInput] = useState('')

    const onChange = (e) =>{
       setInput(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,{name:input, completed :false, id:uuid() }
        ])
        setInput("");

    }


  return (
    <div>
         <form onSubmit={onSubmit}>
         <input 
         className='form-input'
         type='text' 
         placeholder='Enter a todo' 
         autoComplete='off'
         value = {input}
         onChange={onChange}
         />
        <button className='form-button' type='onSubmit'> Add</button>

    </form>
    </div>
  )
}

export default Formnew