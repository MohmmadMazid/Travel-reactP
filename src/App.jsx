
import From from './components/From'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { initialItems } from './initialItems'

import { useState } from 'react'
function App() {
  const [items, setItems] = useState(initialItems);
  console.log("initial items inside the app component ", items)

  const handAddleItems = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    })
  }

  const handleDeleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => (item.id !== id));
    })
  }

  /*
  this will not work because you are not sendig the items whose id is not matching , you are setting them undefined
  hum sirf yahi chahte h ki jis item ki id match ho jae that idem shoud me updated or jinke id match nhi hoti h wo wese ke wesi hi rahne chahiye
  
  const handleToggleItem = (id)=>{
    setItems((preveItem)=>{
      return preveItem.map((item)=>{
        if(item.id==id){
          return {...item,packed:!item.packed};
        }
      })
    })
  }
  */


  // this will be work fine
  const handleToggleItem = (id) => {
    setItems((prevItem) => {
      return prevItem.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    })
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure ! you want to clear the list items")
    if (confirmed) {

      setItems([]);
    }
  }
  return (
    <>
      <div className='app'>
        <Logo />
        <From handAddleItems={handAddleItems} />
        <PackingList items={items} onDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} handleClearList={handleClearList} />
        <Stats items={items} />
      </div>
    </>
  )
}

export default App
