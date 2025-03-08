import React from 'react'
import { create } from 'zustand'


 export const useStore = create((set) => ({
    count: 0,
    inc: (price) => set((state) => ({ count: state.count + Number(price)

     })),
  }))
  
   function Counter() {
    const { count, inc } = useStore()
    return (
      <div>
        <h1>Iphone 11 pro max</h1><p>Price: 2.50 Azn</p><p>Made in China</p>
        <button  onClick={()=>inc(2.5)}>Add to cart</button><br />
        <h1>Iphone 12 pro max</h1><p>Price: 4 Azn</p><p>Made in China</p>
        <button  onClick={()=>inc(4)}>Add to cart</button><br />
        <h1>Iphone 13 pro max</h1><p>Price: 5 Azn</p><p>Made in China</p>
        <button  onClick={()=>inc(5)}>Add to cart</button><br />
        <span>Total Pirce: {count}</span>
      </div>
    )
  }

const Home = () => {
  return (
    <div>
        <div>
            
            <Counter/>
        </div>
    </div>
  )
}

export default Home