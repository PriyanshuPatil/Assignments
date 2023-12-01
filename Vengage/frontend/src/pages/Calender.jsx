import React, { useEffect, useState } from 'react'
import style from "./css/Calender.module.css";
import { Box, Button, useToast } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [day, setday] = useState("mon");
  useEffect(() => {
    setday(value.toDateString().split(" ")[0])
  }, [value])
  const toast=useToast() ;
  const booked=()=>{
    toast({
      title: "Available",
      description: "This Time Slot Is Available.",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  }

  const not_booked=()=>{
    toast({
      title: "Closed",
      description: "This Time Slot Is Not Available.",
      status: "warning",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  }

  return (
    <Box>
    <Box  className={style.calender_heading}>Check Available Slots :-</Box>
      <Box className={style.calender_parent}>
        <Box>
        <Box className={style.calender_heading1}>{value.toDateString().split(" ")[2]}-{value.toDateString().split(" ")[1]}-{value.toDateString().split(" ")[3]}</Box>
         <Calendar onChange={onChange} value={value} /> 
        </Box>
        
        <Box>
        <Box  className={style.calender_heading1}>Time Slots :-</Box>
       
        <Box  className={style.time_slot}>
          {day == "Mon"  && mon.map((el) => {
              return <Box onClick={()=>{!el.status?not_booked():booked()}} style={!el.status?{backgroundColor:"yellow",color:"black"}:{backgroundColor:"purple"}}>{el.time}</Box>
            })
          }
          {day == "Tue"  && mon.map((el) => {
              return <Box onClick={()=>{!el.status?not_booked():booked()}}  style={!el.status?{backgroundColor:"yellow",color:"black"}:{backgroundColor:"purple"}}>{el.time}</Box>
            })
          }
          {day == "Wed" && wed.map((el) => {
              return <Box onClick={()=>{!el.status?not_booked():booked()}}  style={!el.status?{backgroundColor:"yellow",color:"black"}:{backgroundColor:"purple"}}>{el.time}</Box>
            })
          }
          {day == "Thu"  && mon.map((el) => {
              return <Box onClick={()=>{!el.status?not_booked():booked()}}  style={!el.status?{backgroundColor:"yellow",color:"black"}:{backgroundColor:"purple"}}>{el.time}</Box>
            })
          }
          {day == "Fri"  && mon.map((el) => {
              return <Box onClick={()=>{!el.status?not_booked():booked()}}  style={!el.status?{backgroundColor:"yellow",color:"black"}:{backgroundColor:"purple"}}>{el.time}</Box>
            })
          }
          {day == "Sat" && sat.map((el) => {
              return <Box onClick={()=>{!el.status?not_booked():booked()}}  style={!el.status?{backgroundColor:"yellow",color:"black"}:{backgroundColor:"purple"}}>{el.time}</Box>
            })
          }  
          {day == "Sun" &&<Box>Holiday</Box>}
        </Box>
      </Box>
 </Box>
    </Box>

  )
}

export default Calender;

// ;let dayis=value.toDateString().split(" ")[0];setday(dayis)}

const mon = [
  { time: "8:00 AM", status: true },
  { time: "8:30 AM", status: true },
  { time: "9:00 AM", status: true },
  { time: "9:30 AM", status: true },
  { time: "10:00 AM", status: true },
  { time: "10:30 AM", status: true },
  { time: "11:00 AM", status: true },
  { time: "11:30 AM", status: true },
  { time: "12:00 PM", status: true },
  { time: "12:30 PM", status: false },
  { time: "01:00 PM", status: false },
  { time: "01:30 PM", status: true },
  { time: "2:00 PM", status: true },
  { time: "2:30 PM", status: true },
  { time: "3:00 PM", status: true },
  { time: "3:30 PM", status: true },
  { time: "4:00 PM", status: true },
  { time: "4:30 PM", status: true },
  { time: "5:00 PM", status: true }
]

const wed = [
  { time: "8:00 AM", status: true },
  { time: "8:30 AM", status: true },
  { time: "9:00 AM", status: true },
  { time: "9:30 AM", status: true },
  { time: "10:00 AM", status: true },
  { time: "10:30 AM", status: true },
  { time: "11:00 AM", status: true },
  { time: "11:30 AM", status: true },
  { time: "12:00 PM", status: true },
  { time: "12:30 PM", status: false },
  { time: "01:00 PM", status: false },
  { time: "01:30 PM", status: true },
  { time: "2:00 PM", status: true },
  { time: "2:30 PM", status: true },
  { time: "3:00 PM", status: true },
  { time: "3:30 PM", status: false },
  { time: "4:00 PM", status: false },
  { time: "4:30 PM", status: false },
  { time: "5:00 PM", status: true }
]


const sat = [
  { time: "8:00 AM", status: true },
  { time: "8:30 AM", status: true },
  { time: "9:00 AM", status: true },
  { time: "9:30 AM", status: true },
  { time: "10:00 AM", status: true },
  { time: "10:30 AM", status: true },
  { time: "11:00 AM", status: true },
  { time: "11:30 AM", status: true },
  { time: "12:00 PM", status: true }
]

const sun = [
  
]