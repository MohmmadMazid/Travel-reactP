
import From from './components/From'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { initialItems } from './initialItems'

import { useState } from 'react'
function App() {
    const [items,setItems]=useState(initialItems);
    console.log("initial items inside the app component ",items)
  
  const handAddleItems = (item)=>{
        setItems((prevItems)=>{
            return [...prevItems,item];
        })
    }

  const handleDeleteItem = (id)=>{
    setItems((items)=>{
      return items.filter((item)=>(item.id!==id));
    })
  }

  return (
    <>
     <div className='app'>
        <Logo/>
        <From handAddleItems={handAddleItems}/>
        <PackingList items={items} onDeleteItem={handleDeleteItem}/>
        <Stats/>
     </div>
    </>
  )
}

export default App
