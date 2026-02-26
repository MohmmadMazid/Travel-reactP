import React from 'react'
import Item from './Item';


const PackingList = ({items,onDeleteItem}) => {
    
  return (
    <ul className='list'>
        {items.map((item,index)=>{
            return (
                <Item item={item} key={index} onDeleteItem={onDeleteItem}/>
            )
        })}
    </ul>
  )
}

export default PackingList