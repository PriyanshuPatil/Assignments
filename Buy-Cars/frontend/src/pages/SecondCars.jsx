import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { applyFilter, getCarsData } from '../redux/carsReducer/cars.action'
import { Box, Button, Heading, Input, Select, Spinner, useToast } from '@chakra-ui/react'
import axios from 'axios'

const SecondCars = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const toast=useToast()
    const {loading,Data,cars_data}=useSelector((store)=>store.Cars) 
    const { isAuth } = useSelector((store) => store.Auth)
    const [idis,setid]=useState("")
    const [active,setactive]=useState(false)
    const [price,setprice]=useState("")
    useEffect(()=>{ 
         if(!isAuth){
      toast({
        title: 'Please Login First',
        description: "First Login Then You Can Try To Access This Application.",
        status: 'info',
        position:"top",
        duration: 2000,
        isClosable: true,
      })
      navigate("/login")
    }
   dispatch(getCarsData());
    },[isAuth])
    if(loading){
        return <Spinner/>
    }

  return (
    <Box pt='60px'>
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
       return <Box pb='20px' borderRadius={'20px'} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
       <img style={{borderRadius:'20px'}}  src={el.image}/>
       <Box p='10px'>
       <Box fontSize={'13px'} fontWeight={'500'} display={"grid"} w="100%" m={"auto"}  mt='20px'gridTemplateColumns={"repeat(2,1fr)"} gap="50px">
        <Heading fontSize={'17px'} ml='20px'  fontWeight={'500'}>{el.year} {el.title}</Heading>
        {active && <Heading fontSize={'19px'} textAlign={'center'} fontWeight={'600'}>₹{el._id==idis && active?<Input onChange={(e)=>{setprice(e.target.value)}} w='30%' type={"number"}  fontWeight={'600'} border={'1px solid blue'} p='0px' />:el.price}   Lakhs</Heading>}
        {!active && <Heading fontSize={'19px'} textAlign={'center'} fontWeight={'600'}>₹{el.price} Lakhs</Heading>}
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
       <Box w='40%' m='auto' display={'grid'} gridTemplateColumns={"repeat(2,1fr)"} gap="10px" mt='20px'>
        <Button backgroundColor={'red'} onClick={()=>{deleteCars(el._id,dispatch,getCarsData,toast)}}>Delete</Button>
       {!active && !el._id==idis && <Button backgroundColor={'green'} onClick={()=>{setid(el._id);setactive(true);setprice(el.price)}}>Edit</Button>} 
       {active && el._id==idis  && <Button backgroundColor={'green'} onClick={()=>{setid("");setactive(false);setprice("");editCars(el._id,price,dispatch,getCarsData,toast)}}>Done</Button>} 
        </Box>
       </Box>
       })}
        </Box>
  
    </Box>
  )
}

export default SecondCars ;

  const deleteCars=(id,dispatch,getCarsData,toast)=>{
    console.log(id)
    axios
    .delete(`https://enchanting-teal-llama.cyclic.cloud/marketplaceinventory/${id}`)
    .then((res) => {
      toast({
        title: 'Success',
        description:'Cars Is Deleted',
        status:'success' ,
        duration: 2000,
        position:"top",
        isClosable: true,
      })
      dispatch(getCarsData())
    })
    .catch((err) => {
      toast({
        title: 'Something Wrong With Api.',
        description:'Try After Some Time',
        status:'error' ,
        duration: 2000,
        position:"top",
        isClosable: true,
      })
    });
  }

  const editCars=(id,price,dispatch,getCarsData,toast)=>{
    console.log(id)
    axios
    .patch(`https://enchanting-teal-llama.cyclic.cloud/marketplaceinventory/${id}`,{price})
    .then((res) => {
      toast({
        title: 'Success',
        description:'Car Data Is Updated',
        status:'success' ,
        duration: 2000,
        position:"top",
        isClosable: true,
      })
      dispatch(getCarsData())
    })
    .catch((err) => {
      toast({
        title: 'Something Wrong With Api.',
        description:'Try After Some Time',
        status:'error' ,
        duration: 2000,
        position:"top",
        isClosable: true,
      })
    });
  }
