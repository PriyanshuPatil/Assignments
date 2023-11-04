import { Box, Button, Heading, Image, Input, Spinner, useToast, select, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.jpg"
import img2 from "../assets/img2.jpg"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const AddCars = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, isAuth } = useSelector((store) => store.Cars)
  const [car_data, setCarData] = useState(
    {
      title: "",
      image: "",
      year: "",
      price: "",
      color: "",
      mileage: "",
      power: "",
      speed: "",
      kmsodometer: "",
      scratches: "",
      originalpaint: "",
      accidents: "",
      previousbuyer: "",
      registrationplace: ""
    }
  );
  const toast = useToast()
  const onchange_input = (e) => {
    let value = e.target.name;
    if (e.target.name == "title") {
      setCarData({ ...car_data, title: e.target.value })
    }
    else if (e.target.name == "image") {
      setCarData({ ...car_data, image: e.target.value })
    } else if (e.target.name == "year") {
      setCarData({ ...car_data, year: e.target.value })
    } else if (e.target.name == "price") {
      setCarData({ ...car_data, price: e.target.value })
    } else if (e.target.name == "color") {
      setCarData({ ...car_data, color: e.target.value })
    } else if (e.target.name == "mileage") {
      setCarData({ ...car_data, mileage: e.target.value })
    } else if (e.target.name == "power") {
      setCarData({ ...car_data, power: e.target.value })
    } else if (e.target.name == "speed") {
      setCarData({ ...car_data, speed: e.target.value })
    } else if (e.target.name == "kmsodometer") {
      setCarData({ ...car_data, kmsodometer: e.target.value })
    } else if (e.target.name == "Number Of Scratches") {
      setCarData({ ...car_data, scratches: e.target.value })
    } else if (e.target.name == "paint") {
      setCarData({ ...car_data, originalpaint: e.target.value })
    } else if (e.target.name == "Number Of accidents") {
      setCarData({ ...car_data, accidents: e.target.value })
    } else if (e.target.name == "Previous Buyer") {
      setCarData({ ...car_data, previousbuyer: e.target.value })
    } else if (e.target.name == "registrationplace") {
      setCarData({ ...car_data, registrationplace: e.target.value })
    }
  }
  useEffect(()=>{
// if(!isAuth){
//     toast({
//       title: 'Please Login First',
//       description: "First Login Then You Can Try To Access This Application.",
//       status: 'info',
//       position:"top",
//       duration: 2000,
//       isClosable: true,
//     })
//     navigate("/login")
//   }
  },[])
  
  return (
    <Box backgroundImage={`url(${img2})`} h='900px' pt='50px'>
      <Box backgroundColor={'white'} borderRadius={'5%'} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"} w='70%' p='30px' m='auto' mt='3%' display={'grid'} gap='20px'>
        <Heading backgroundColor={'gray'} p='20px 10px' borderRadius={'50%'} color='white' w='30%' margin={'auto'} textAlign={'center'} fontSize={'24px'} fontWeight={'500px'}>Add Second Hand Car</Heading>
        <Image src={logo} w='150px' m={'auto'} />
        <Box display={'grid'} gridTemplateColumns={"repeat(3,1fr)"} gap='20px'>
          <Input onChange={(e) => { onchange_input(e) }} name='title' placeholder='Title' />
          <Input onChange={(e) => { onchange_input(e) }} name='image' placeholder='Image URL' />
          <Input onChange={(e) => { onchange_input(e) }} name='year' placeholder='Model Year' type='number' />
          <Input onChange={(e) => { onchange_input(e) }} name='price' placeholder='Price' type='number' />
          <Select onChange={(e) => { onchange_input(e) }} name='color' >
            <option value="">Select Color</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
          </Select>
          <Input onChange={(e) => { onchange_input(e) }} name='mileage' placeholder='Mileage' type='number' />
          <Input onChange={(e) => { onchange_input(e) }} name='power' placeholder='Power In bhp Number' type='number' />
          <Input onChange={(e) => { onchange_input(e) }} name='speed' placeholder='Maximum Speed' type='number' />
          <Input onChange={(e) => { onchange_input(e) }} name='kmsodometer' placeholder='Kms in Odometer' type='number' />
          <Select onChange={(e) => { onchange_input(e) }} name='Number Of Scratches' >
            <option value="">Number Of Scratches</option>
            <option value="0">0 Scratches</option>
            <option value="1">1 Scratches</option>
            <option value="2">2 Scratches</option>
            <option value="3">3 Scratches</option>
          </Select>

          <Select onChange={(e) => { onchange_input(e) }} name='paint' >
            <option value="">Original paint</option>
            <option value="0">Yes</option>
            <option value="1">No</option>
          </Select>
          <Select onChange={(e) => { onchange_input(e) }} name='Number Of accidents' >
            <option value="">Number Of accidents</option>
            <option value="0">0 accidents</option>
            <option value="1">1 accidents</option>
            <option value="2">2 accidents</option>
            <option value="3">3 accidents</option>
          </Select>
          <Select onChange={(e) => { onchange_input(e) }} name='Previous Buyer' >
            <option value="">Previous Buyer</option>
            <option value="0">0 Previous Buyer</option>
            <option value="1">1 Previous Buyer</option>
            <option value="2">2 Previous Buyer</option>
            <option value="3">3 Previous Buyer</option>
          </Select>
          <Input onChange={(e) => { onchange_input(e) }} name='registrationplace' placeholder='Registration Place' />
        </Box>

        <Button w='100%' backgroundColor={'gray'} onClick={() => { post_new_car(car_data,toast,navigate) }}>Submit</Button>

      </Box>
    </Box>
  )
}

export default AddCars ;

const post_new_car=(car_data,toast,navigate)=>{
if(
  car_data.title !=="" &&
  car_data.image !=="" &&
  car_data.year !=="" &&
  car_data.price !=="" &&
  car_data.color !=="" &&
  car_data.mileage !=="" &&
  car_data.power !=="" &&
  car_data.speed !=="" &&
  car_data.kmsodometer !=="" &&
  car_data.scratches !=="" &&
  car_data.originalpaint !=="" &&
  car_data.accidents !=="" &&
  car_data.previousbuyer !=="" &&
  car_data.registrationplace !==""){
    axios
    .post(`https://enchanting-teal-llama.cyclic.cloud/marketplaceinventory`,car_data)
    .then(() => {
  console.log(car_data)
      toast({
        title: 'Succesfully Added',
        description: "Your car is now live for sale.",
        status: 'success',
        position:"top",
        duration: 2000,
        isClosable: true,
      })
    })
    navigate("/secind-hand-cars")
  }else{
    toast({
      title: 'Empty Field',
      description: "Please Provide All Credentials.",
      status: 'info',
      position:"top",
      duration: 2000,
      isClosable: true,
    })
  }
}