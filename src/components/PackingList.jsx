import React from 'react'
import { useState } from 'react';
import Item from './Item';
import { initialItems } from '../initialItems';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "charger", quantity: 1, packed: false },
// ];

const PackingList = () => {
    const [myinitialItems,setMyinitialItems]=useState(initialItems);
    
  return (
    <ul className='list'>
        {myinitialItems.map((item,index)=>{
            return (
                <Item item={item} key={index}/>
            )
        })}
    </ul>
  )
}

export default PackingList