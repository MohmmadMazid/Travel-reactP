import React, { useState } from 'react'
// import { initialItems } from '../initialItems'
const From = ({handAddleItems}) => {
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState(1)

    /*

    this state has been lifted to the parent component then it has been pass as props to the needy child 
    
    it becomes very easy to pass the state from parent to child component

    and i also learned the how to use the state lifting state up , it is the very important concept in the react 

    const [items,setItems]=useState([]);
    const handleItems = (item)=>{
            setItems((prevItems)=>{
                    return [...prevItems,item];
                })
            }
    */
            
            const handleInput = (e)=>{
        setDescription(e.target.value);
    }

    const handleSelectValueChange = (e)=>{
        setQuantity(Number(e.target.value))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!description){
            return;
        }
        const newItem = {id:Date.now(),description:description,quantity:quantity,packed:false}
        console.log(newItem)
        handAddleItems(newItem)
        // console.log(myinitialItems)
        setDescription("")
        setQuantity(1)
    }
  return (
    <form onSubmit={handleSubmit} className='add-form'>
        <h3>What do you want for your 😊 trip ?</h3>
        <select value={quantity} onChange={handleSelectValueChange}>
                {Array.from({length:20},(_,i)=>i+1).map((num)=>(<option value={num} key={num}>{num}</option>))}
        </select>
        <input onChange={handleInput} type="text" value={description} placeholder='Item...'/>
        <button>Add</button>
    </form>
  )
}

export default From