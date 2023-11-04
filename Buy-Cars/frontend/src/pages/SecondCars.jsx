import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { applyFilter, getCarsData } from '../redux/carsReducer/cars.action'
import { Box, Button, Heading, Select, Spinner } from '@chakra-ui/react'

const SecondCars = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loading,Data,cars_data}=useSelector((store)=>store.Cars) 
    useEffect(()=>{
   dispatch(getCarsData());
    },[])
    if(loading){
        return <Spinner/>
    }
  return (
    <Box mt='60px'>
      <Box  display={"grid"} w='40%' m="auto" gridTemplateColumns={"repeat(3,1fr)"} gap="30px">
       <Box m='20px 0px'>
        <Select onChange={(e)=>{dispatch(applyFilter(e.target.value,Data))}}>
          <option value="">Filter By Price</option>
          <option value="1-3">₹ 1-3 Lakhs</option>
          <option value="3-5">₹ 3-5 Lakhs</option>
          <option value="5-8">₹ 5-8 Lakhs</option>
          <option value="8-10">₹ 8-10 Lakhs</option>
        </Select>
       </Box>
       <Box m='20px 0px'>
        <Select onChange={(e)=>{dispatch(applyFilter(e.target.value,Data))}}>
          <option value="">Filter By Color</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </Select>
       </Box>
       <Box m='20px 0px'>
        <Select onChange={(e)=>{dispatch(applyFilter(e.target.value,Data))}}>
          <option value="">Filter By Mileage</option>
          <option value="1-10">1-10 KM/L</option>
          <option value="10-15">10-15 KM/L</option>
          <option value="15-20">15-20 KM/L</option>
          <option value="20-30">20-25 KM/L</option>
        </Select>
       </Box>
      </Box>
        <Box display={"grid"} w='80%' m="auto" gridTemplateColumns={"repeat(3,1fr)"} gap="20px">
      {cars_data.length==0 && "No data matched with this filter"}
       {cars_data.map((el)=>{
       return <Box pb='30px' borderRadius={'20px'} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
       <img style={{borderRadius:'20px'}}  src={el.image}/>
       <Box p='10px'>
       <Box fontSize={'13px'} fontWeight={'500'} display={"grid"} w="100%" m={"auto"}  mt='20px'gridTemplateColumns={"repeat(2,1fr)"} gap="50px">
        <Heading fontSize={'17px'} ml='20px'  fontWeight={'500'}>{el.year} {el.title}</Heading>
        <Heading fontSize={'19px'} textAlign={'center'} fontWeight={'600'}>₹ {el.price} Lakhs</Heading>
       </Box>
       
       <Box fontSize={'13px'} fontWeight={'500'} display={"grid"} w="90%" m={"auto"}  mt='20px'gridTemplateColumns={"repeat(4,1fr)"} gap="10px">
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}  fontSize={'13px'}>{el.kmsodometer} KM</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}    fontSize={'13px'}>{el.previousbuyer} OWNER</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}   fontSize={'13px'}>{el.kmsodometer} KM</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}    fontSize={'13px'}>{el.registrationplace}</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}  fontSize={'13px'}>{el.scratches} Scratches</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}    fontSize={'13px'}>{el.accidents} accidents</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}   fontSize={'13px'}>{el.mileage} KM/L</Box>
        <Box borderRadius={"10px"}  p='5px' backgroundColor={"gray.300"} color={"gray.700"} textAlign={'center'}    fontSize={'13px'}>{el.color} Color</Box>
       </Box>
       </Box>
       </Box>
       })}
        </Box>
    </Box>
  )
}

export default SecondCars ;