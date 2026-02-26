import React from 'react'


const Item = ({item,onDeleteItem,handleToggleItem}) => {
    // console.log(item)


    // you can not do that because props value can not be changed or modified 
    // that's why you will not be able to change the value of the props 
    // const handleIputCheck  = (id)=>{
    //     if(id===item.id){
    //       item.packed=true;
    //     }
    // }
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={()=>handleToggleItem(item.id)} />
        <span style={item.packed?{textDecoration:"line-through"}:{}}>{item.quantity}{item.description}</span>
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default Item