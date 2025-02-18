import React, { useState } from 'react'
import toast  from 'react-hot-toast';

const Todo = ({id,todos,setTodos, todo}) => {

    const [edit, setEdit] = useState(false);
    const [inputedit, setInputEdit] = useState(todo.name)

    const onComplete = () => {
        setTodos(todos.map((item)=>{
            if( todo.id === item.id) {
                return{
                    ...item, completed: !item.completed

                }
                
              }
              return item

        }))
    }

    const onEdit = () =>{
        setEdit(true)
    }

    const onChangedsave = (e) =>{
        setInputEdit(e.target.value);

    }


    const onChangedit = () =>{

    
    }
    const onSave = (id) =>{
        setEdit(false)
        if (inputedit){
            saveInput(inputedit,id )
        }
        else {
            setInputEdit(todo.name)
        }
    }

    const saveInput = (inputedit) => {
        const savetodos = [...todos]
        savetodos.forEach((item)=>{
            if (item.id !== todos.id){
                (todo.name = inputedit)
            }

        })
        setTodos(savetodos)

    }

    const onDelete= () =>{
        setTodos(todos.filter((item)=>
            todo.id !== item.id
        ))
    }

    if (edit){
        return (
            <div className='todo-li'>
                <li className='li-list' >
                    <input 
                    className="li-input" 
                    value={inputedit}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^[a-zA-Z]*$/.test(value)) {
                          onChangedsave(e);
                        } else {
                          toast.error("Only letters are allowed.");
                        }
                      }}
                     />
                    <button className='button-save' onClick={()=>onSave(id)}>
                        <span className='text-save'>Save</span><i className='fa fa-save'></i>
                    </button>
        
                   
        
        
        
                </li>
            </div>
          )
        

    }else{
        return (
            <div className='todo-li'>
                <li className={`li-list ${todo.completed ? 'completed':''}`}>
                    <input className="li-input" value={todo.name} onChange={onChangedit}/>
                    <button className='button-complete' onClick={onComplete}>
                        <span className='text-complete'>Completed</span><i className='fa fa-check'></i>
                    </button>
        
                    <button className='button-edit' onClick={onEdit}>
                        <span className='text-edit'>Edit</span><i className='fa fa-edit'></i>
                    </button>
        
                    <button className='button-delete' onClick={onDelete}> 
                        <span className='text-delete'>Delete</span><i className='fa fa-trash'></i>
                    </button>
        
        
        
                </li>
            </div>
          )

    }

  
}

export default Todo