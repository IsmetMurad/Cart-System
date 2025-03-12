import React from 'react'
import { useStore } from './Home'
import { Link } from 'react-router'
import { Button } from '@chakra-ui/react'


const Cart = () => {
    

    const {count} = useStore()
  return (
    <div>
        {count}
        <Link to='/'><Button>Back to Store</Button> </Link>
    </div>
  )
}

export default Cart