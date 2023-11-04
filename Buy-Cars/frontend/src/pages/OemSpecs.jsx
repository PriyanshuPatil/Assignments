import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { applyFilter, getCarsData } from '../redux/carsReducer/cars.action'
import { Box, Button, Heading, Input, Select, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { getOemData, searchOemData } from '../redux/oemReducer/oem.action'
import axios from 'axios'

const OemSpecs = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loading,Data,oem_data}=useSelector((store)=>store.Oem) 
    const [inputis,setinput]=useState("")
    const [add_oem,setoem]=useState({
      "name":"",
      "year":"",
      "price":"",
      "color":"",
      "mileage":"",
      "power":"",
      "speed":"" })
    const [isactive,setactive]=useState(false)
    const toast=useToast() ;
    const handlechange=(e)=>{
  if(e.target.name=="name"){
    setoem({...add_oem,name:toTitleCase(e.target.value)})
  }else if(e.target.name=="year"){
    setoem({...add_oem,year:e.target.value})
  }else if(e.target.name=="price"){
    setoem({...add_oem,price:e.target.value})
  }else if(e.target.name=="color"){
    setoem({...add_oem,color:e.target.value.split(",")})
  }else if(e.target.name=="mileage"){
    setoem({...add_oem,mileage:e.target.value})
  }else if(e.target.name=="power"){
    setoem({...add_oem,power:e.target.value})
  }else if(e.target.name=="speed"){
    setoem({...add_oem,speed:e.target.value})
  }
    }
    useEffect(()=>{
   dispatch(getOemData());
    },[])
    if(loading){
        return <Spinner/>
    }
    function toTitleCase(str) {
      return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
    
  return (
    <Box mt='0px'>
        <Box display={"grid"} w='90%' m="auto" gridTemplateColumns={"repeat(1,1fr)"} >
      {oem_data && oem_data.length==0 && "No data matched with this filter"}
      <Box mt='100px'  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
        <Box display={"grid"} gridTemplateColumns={"2fr 1fr"} gap="20px" w="40%" m='auto' p='20px'>
         <Input placeholder='Search By Model Name' display={'block'} m='auto' onChange={(e)=>{setinput(e.target.value)}}/>  
         <Button onClick={()=>{dispatch(searchOemData({"name":inputis}))}}>Search</Button>
        </Box>
     
       <TableContainer >
  <Table mt='10px'  variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
      <Th>Name</Th>
        <Th>Year</Th>
        <Th>Price</Th>
        <Th>Color</Th>
        <Th>Mileage</Th>
        <Th>Power</Th>
        <Th>Speed</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
    
    {oem_data.map((el)=>{
      return <Tr>
        <Td>{el.name}</Td>
        <Td>{el.year}</Td>
        <Td >{el.price}</Td>
        <Td>{el.color.join(",")}</Td>
        <Td>{el.mileage}</Td>
        <Td >{el.power}</Td>
        <Td >{el.speed}</Td>
        <Td ><Button  backgroundColor={'red'} onClick={()=>{deleteSpecs(el._id,dispatch,getOemData,toast)}}>Delete</Button></Td>
      </Tr>
    })}
      <Button onClick={()=>{setactive(!isactive)}} backgroundColor={"yellow"} display={"block"} m='20px auto'>Add New Oem Specs</Button>
      {isactive && <Tr>
        <Td><Input name="name" onChange={(e)=>{handlechange(e)}} placeholder={"Enter Name"} border={'1px solid gray'} /></Td>
        <Td><Input name="year" onChange={(e)=>{handlechange(e)}} placeholder={"Enter Year"} type='number'  border={'1px solid gray'} /></Td>
        <Td><Input name="price" onChange={(e)=>{handlechange(e)}}  placeholder={"Enter Price"} type='number'   border={'1px solid gray'} /></Td>
        <Td><Input name="color" onChange={(e)=>{handlechange(e)}} placeholder={"Enter Color"}  border={'1px solid gray'} /></Td>
        <Td><Input name="mileage" onChange={(e)=>{handlechange(e)}} placeholder={"Enter mileage"} type='number'   border={'1px solid gray'} /></Td>
        <Td><Input name="power" onChange={(e)=>{handlechange(e)}}  placeholder={"Enter power"} type='number'   border={'1px solid gray'} /></Td>
        <Td ><Input name="speed" onChange={(e)=>{handlechange(e)}} placeholder={"Enter speed"} type='number'   border={'1px solid gray'} /></Td>
        <Td><Button w='100%' onChange={(e)=>{handlechange(e)}} backgroundColor={'green'} color={'white'} onClick={()=>{
         addSpecs(add_oem,dispatch,getOemData,toast);setactive(!isactive)
    
          }}>Add</Button></Td>
      </Tr>}
      
    </Tbody>
  </Table>
</TableContainer>
        </Box>
    </Box>
       </Box>
  )
}

export default OemSpecs ;

const deleteSpecs=(id,dispatch,getOemData,toast)=>{
  console.log(id)
  axios
  .delete(`http://localhost:3600/oemspecs/${id}`)
  .then((res) => {
    toast({
      title: 'Success',
      description:'Oem Is Deleted',
      status:'success' ,
      duration: 2000,
      position:"top",
      isClosable: true,
    })
    dispatch(getOemData())
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

const addSpecs=(cred,dispatch,getOemData,toast)=>{
  console.log(cred)
  if(cred.name!=="" && 
  cred.year!=="" &&
  cred.price!=="" &&
  cred.color!=="" && 
  cred.mileage!=="" &&
  cred.power!=="" &&
  cred.speed!=="" ){
axios
  .post(`http://localhost:3600/oemspecs`,cred)
  .then((res) => {
    toast({
      title: 'Success',
      description:'Oem Is Added',
      status:'success' ,
      duration: 2000,
      position:"top",
      isClosable: true,
    })
    dispatch(getOemData())
  })
  .catch((err) => {
  console.log(cred)
    toast({
      title: 'Something Wrong With Api.',
      description:'Try After Some Time',
      status:'error' ,
      duration: 2000,
      position:"top",
      isClosable: true,
    })
  });
  }else{
    toast({
      title: 'Empty Input',
      description:'Provide All Details.',
      status:'error' ,
      duration: 2000,
      position:"top",
      isClosable: true,
    })
  }
  
}



