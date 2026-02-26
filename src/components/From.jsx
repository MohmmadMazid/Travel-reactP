import React, { useState } from 'react'
import { initialItems } from '../initialItems'
const From = () => {
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState(1)
    const [myinitialItems,setMyinitialItems]=useState(initialItems);

    const handleInput = (e)=>{
        setDescription(e.target.value);
        // console.log(description)
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
        setMyinitialItems((prev)=>{
            return [...prev ,newItem]
        })
        console.log(myinitialItems)
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