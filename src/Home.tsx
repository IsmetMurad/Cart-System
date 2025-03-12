import React from 'react'
import { create } from 'zustand'
import { Link } from 'react-router'
import { Button } from "@chakra-ui/react"
import { Badge, Box, Card, HStack, Image, Text } from "@chakra-ui/react"
import i11 from './/imgs/220117170017200029.webp'


 export const useStore = create((set) => ({
    count: 0,
    inc: (price: number) => set((state: { count: number }) => ({ count: state.count + Number(price)

     })),
  }))
  
   function Counter() {
    const { count, inc } = useStore()
    return (
      
      <Box display='flex' flexWrap='wrap'>
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="250px"
      src={i11}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">iPhone 11 pro max</Card.Title>
        <Card.Description>
          Best phone for you. You need to buy one of this.
        </Card.Description>
        <HStack mt="4">
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button onClick={()=>inc(450)}>Add to cart</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="250px"
      src={i11}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">iPhone 12 pro max</Card.Title>
        <Card.Description>
          Best phone for you. You need to buy one of this.
        </Card.Description>
        <HStack mt="4">
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button onClick={()=>inc(450)}>Add to cart</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="250px"
      src={i11}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">iPhone 13 pro max</Card.Title>
        <Card.Description>
          Best phone for you. You need to buy one of this.
        </Card.Description>
        <HStack mt="4">
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button onClick={()=>inc(450)}>Add to cart</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="250px"
      src={i11}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">iPhone 14 pro max</Card.Title>
        <Card.Description>
          Best phone for you. You need to buy one of this.
        </Card.Description>
        <HStack mt="4">
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button onClick={()=>inc(450)}>Add to cart</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
  
        
        
        <Link to='/cart'><Button backgroundColor='blue.400'>Go to cart</Button> </Link>
      </Box>
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