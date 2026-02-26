// import React from 'react'

// const Stats = () => {
//   return (
//     <div className='stats'>
//         <em>
//             🎒You have X items in your list , and you have already packed X (X%)
//         </em>
//     </div>
//   )
// }

// export default Stats

function Stats({ items }) {
  const totalItems = items.length;

  const packedItems = items.filter(item => item.packed).length;

  if(!totalItems){
    return (
      <div className="stats">
          <em>stars adding some items to your packing list 👝</em>
      </div>
    )
  }

  const percentage =
    totalItems === 0
      ? 0
      : Math.round((packedItems / totalItems) * 100);

  return (
    <div className="stats">
      <em>
        {/* {percentage}% packed ({packedItems}/{totalItems}) */}
        {packedItems===totalItems ? "you got everything ! Ready to go ✈️" :
         `🎒You have ${packedItems} items in your list , and you have already packed (${packedItems}/${totalItems}) ${percentage}%`
        }
      </em>
    </div>
  );
}
export default Stats