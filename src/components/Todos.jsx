import React, { useState,useEffect,useRef } from 'react'
import Todo from './Todo'
import './css/Todos.css'

function Todos() {
    const [todos, setTodos] = useState([])
    const [startIndex,setStartIndex]=useState(0)
    const [todo, setTodo] = useState({ desc: '', isDone: false })
    const inputRef=useRef(null)

    useEffect(()=>{
        try {
            let todos_list=JSON.parse(localStorage.getItem('TODOS'))
            let new_arr=[]
            for (let i of todos_list) {
                new_arr.push(i)
            }
            setTodos([...new_arr])
        } catch (error) {
            
        }
    },[])

    useEffect(()=>{
        inputRef.current.focus()
    })


    const add_todo = () => {
        let new_array = [...todos, todo]
        if (todo.desc !== '') {
            setTodos([...new_array])
            setTodo({ desc: '', isDone: false })
            localStorage.setItem("TODOS",JSON.stringify(new_array))
        }
        if(todos.length>startIndex+4){
            setStartIndex(todos.length-4)
        }
    }
    const handleStartIndex=(sign,inc)=>{
        if(sign==='+'){
            if(startIndex<todos.length){
                setStartIndex(startIndex+inc)
            }
            else{
                setStartIndex(0)   
            }
        }
        else if(sign==='-'){
            if(startIndex>inc){
                setStartIndex(startIndex-inc)
            }
            else{
                setStartIndex(0)   
            }
        }
    }
    const setIsDone=(e,idx)=>{
        todos[idx].isDone=e.target.checked
        let new_array=[...todos];
        setTodos([...new_array])
        localStorage.setItem("TODOS",JSON.stringify(new_array))
    }
    const deleteTodo=(e,idx)=>{
        // let con=alert(`Do you want to delete ${idx}th todo`)
        // if(!con){
        //     return
        // }
        let new_array=todos.filter((i,index)=> idx!==index)
        setTodos([...new_array])
        localStorage.setItem("TODOS",JSON.stringify(new_array))
    }

    return (
        <div className='box'>
            <table className='center'>
                {todos.length ?
                    <thead>
                        <tr>
                            <th>No</th>
                            <th className='description'>Description</th>
                            <th>Mark</th>
                        </tr>
                    </thead>
                    : <thead><tr><th>No Todo yet</th></tr></thead>
                }

                <tbody>
                    {todos.slice(startIndex,startIndex+5).map((todo, idx) => <Todo {...todo} idx={idx + startIndex+ 1} setIsDone={setIsDone} deleteTodo={deleteTodo} />)}
                </tbody>
            </table>

            <div className='todo_input' >
                <input ref={inputRef} type="text" placeholder='Description' name='desc' value={todo.desc} onChange={(e) => { setTodo({ ...todo, desc: e.target.value }) }} onDragEnter={add_todo} />
                <input type="checkbox" placeholder='Mark' name='mark' checked={todo.isDone} onChange={(e) => { setTodo({ ...todo, isDone: e.target.checked }) }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem 5rem' }} >
                <button onClick={add_todo} className='btn'>ADD</button>
            </div>

            {
            todos.length>=5?
                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
                    <button className='btn' onClick={()=>{handleStartIndex('-',5)}}>Prev</button>
                    <button className='btn' onClick={()=>{handleStartIndex('+',5)}}>Next</button>
                </div>
                :null
            }
        </div>

    )
}

export default Todos;