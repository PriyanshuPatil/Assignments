import { Box, Button, Input, Select, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import style from "./css/Phonebook.module.css";
import { get_Contact_Axios,add_Contact_Axios,update_Contact_Axios ,delete_Contact_Axios} from '../redux/phonebookReducer/phonebookReducer.action';
const PhoneBook = () => {
  const [edit_status,setEdit]=useState(false);
  const [changeDetails,setchangeDetails]=useState(false);
  const [currentData,setcurrentData]=useState({});
  const [new_contact_data,set_new_contact_data]=useState({_id:"",storage:"",first_name:"",last_name:"",phone_number:"",email:"",home:"",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHmgseRqO6CI14XWSh5swCN19tzNhtgptvg&usqp=CAU",mobile_number:""});
  const dispatch=useDispatch()
  const {contactData,loading}=useSelector((store)=>store.Phone)
  const toast=useToast()
  useEffect(()=>{
    dispatch(get_Contact_Axios())
  },[])

  return (
<Box className={style.PhoneBook_parent}>
<Box  className={style.PhoneBook_contact_parent}>
  <Input placeholder='Search Contacts' />
  <Box  className={style.PhoneBook_heading}>My Contacts:-{!edit_status && <Button onClick={()=>{setchangeDetails(false);setEdit(true);}}>Create New Contact</Button>} </Box>
  <Box  className={style.PhoneBook_contact_number_parent}>
    { contactData.map((el)=>{
     return <Box className={style.PhoneBook_contact_number} onClick={()=>{setchangeDetails(true);setEdit(false);set_new_contact_data(el)}}>
  <img src={el.image} />
  <Box>{el.first_name}</Box>
  </Box>
    })}
  
</Box>
</Box>
<Box  className={style.PhoneBook_details_parent}>
  {!edit_status && !changeDetails && <img className={style.PhoneBook_image} src='data:image/jpeg;base64,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' />}
{edit_status && 
<Box  className={style.PhoneBook_new_contact}>
<Box  className={style.PhoneBook_new_contact_heading}>
  <Box>Create New Contact</Box>
  <Button onClick={()=>{ dispatch(add_Contact_Axios(new_contact_data,toast,setEdit))}}>Save</Button>
</Box>
<Box  className={style.PhoneBook_new_contact_image}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdz0Ec-juuQBObngPXMg1rnJbhwSK22DxKD4JWmYmN6XsKJH31ko0ktSxuum0d48nBCc&usqp=CAU"/>
<Select onChange={(e)=>{set_new_contact_data({...new_contact_data,storage:e.target.value})}}   className={style.PhoneBook_new_contact_select}>
  <option value="phone">Save To Phone</option>
  <option value="SimCard">Save To SimCard</option>
</Select></Box>

<Box  className={style.PhoneBook_input_parent}>
<Box><Input onChange={(e)=>{set_new_contact_data({...new_contact_data,first_name:e.target.value})}} placeholder='Name'/></Box>
<Box><Input onChange={(e)=>{set_new_contact_data({...new_contact_data,image:e.target.value})}}  placeholder='Profile Url (Optional)'/></Box>
<Box><Input onChange={(e)=>{set_new_contact_data({...new_contact_data,phone_number:e.target.value})}} type='number'  placeholder='Phone'/></Box>
<Box><Input onChange={(e)=>{set_new_contact_data({...new_contact_data,mobile_number:e.target.value})}} type='number' placeholder='Mobile Number (Optional)'/></Box>
<Box><Input onChange={(e)=>{set_new_contact_data({...new_contact_data,email:e.target.value})}}  placeholder='Email (Optional)'/></Box>
<Box><Input onChange={(e)=>{set_new_contact_data({...new_contact_data,home:e.target.value})}}  placeholder='Home (Optional)'/></Box>
</Box>
</Box>}
{changeDetails && 
<Box  className={style.PhoneBook_new_contact}>
<Box  className={style.PhoneBook_new_contact_heading}>
  <Box>Edit Contact Details :-</Box>
  <Button onClick={()=>{dispatch(update_Contact_Axios(new_contact_data._id,new_contact_data,toast,setchangeDetails))}}>Confirm Edit</Button>
</Box>
<Box  className={style.PhoneBook_new_contact_image}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdz0Ec-juuQBObngPXMg1rnJbhwSK22DxKD4JWmYmN6XsKJH31ko0ktSxuum0d48nBCc&usqp=CAU"/>
<Select onChange={(e)=>{set_new_contact_data({...new_contact_data,storage:e.target.value})}}   className={style.PhoneBook_new_contact_select}>
  <option value="phone">Save To Phone</option>
  <option value="SimCard">Save To SimCard</option>
</Select></Box>

<Box  className={style.PhoneBook_input_parent}>
<Box><Input value={new_contact_data.first_name} onChange={(e)=>{set_new_contact_data({...new_contact_data,first_name:e.target.value})}} placeholder='Name'/></Box>
<Box><Input value={new_contact_data.image}  onChange={(e)=>{set_new_contact_data({...new_contact_data,image:e.target.value})}}  placeholder='Profile Url (Optional)'/></Box>
<Box><Input value={new_contact_data.phone_number}  onChange={(e)=>{set_new_contact_data({...new_contact_data,phone_number:e.target.value})}} type='number'  placeholder='Phone'/></Box>
<Box><Input value={new_contact_data.mobile_number}  onChange={(e)=>{set_new_contact_data({...new_contact_data,mobile_number:e.target.value})}} type='number' placeholder='Mobile Number (Optional)'/></Box>
<Box><Input value={new_contact_data.email}  onChange={(e)=>{set_new_contact_data({...new_contact_data,email:e.target.value})}}  placeholder='Email (Optional)'/></Box>
<Box><Input value={new_contact_data.home}  onChange={(e)=>{set_new_contact_data({...new_contact_data,home:e.target.value})}}  placeholder='Home (Optional)'/></Box>
</Box>
<Box className={style.PhoneBook_delete} onClick={()=>{dispatch(delete_Contact_Axios(new_contact_data._id,toast,setchangeDetails))}}>Delete Contact</Box>
</Box>}
</Box>
</Box>
  )
}

export default PhoneBook