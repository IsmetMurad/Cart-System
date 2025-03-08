import React from 'react'
import { useStore } from './Home'
const Cart = () => {
    

    const {count} = useStore()
  return (
    <div>
        {count}
    </div>
  )
}

export default Cart