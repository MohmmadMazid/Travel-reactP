import React, { useState } from 'react'
import Item from './Item';


const PackingList = ({ items, onDeleteItem, handleToggleItem,handleClearList }) => {
  const [sortby,setSortby] = useState("input");
  let sortedItems;

  if(sortby=="input"){
    sortedItems=items;
  }
  else if(sortby=="description"){
    sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description))
  }
  else if(sortby=="packed"){
    sortedItems = items.slice().sort((a,b)=>a.packed-b.packed)
    
  }

  console.log(sortedItems)

  return (
    <div className='list'>

      <ul>
        {/* now we cn not map the original list array ,because we are applying the sorting based on the selected option so */}
        {/* {items.map((item, index) => {   */}  
        {/* so we will display the sorted array based on the selected input field */}
        {sortedItems.map((item) => {
          return (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} handleToggleItem={handleToggleItem} />
          )
        })}
      </ul>
      <div className='actions'>
        <select value={sortby}  onChange={(e)=>setSortby(e.target.value)} >
          <option value="input">Sort by input order </option>
          <option value="description">Sort by input description </option>
          <option value="packed" >Sort by input packed list </option>
        </select>
        <button onClick={handleClearList}>clear list</button>
      </div>
      
    </div>
  )
}

export default PackingList