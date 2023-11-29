import React from 'react'
import style from './css/Dashboard.module.css'
import { Box, Heading } from '@chakra-ui/react'
import { AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const DashBoard = ({Heading,SubHeading}) => {
  return (
    <Box className={style.dashboard_parent}>
      <Box className={style.dashboard_heading}><AiOutlineHome size='25' /> / {Heading} {SubHeading.length!=0 && `/ ${SubHeading}`} </Box>
      <Box className={style.dashboard_icon}><IoMdArrowDropdown size='25'/>Ind <img width={'35px'} src="data:image/jpeg;base64,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WPaW85GZHWFUm2fMhtSqFOcY8yG1KoceWVhZWOYoREQBERAEREAREQBERAEREAREQBERAERYQHrSUzpXtjYLucbDt6F3DRjCm08LY27GjbvPK73qpdz7RssH7RIOM4cUHyG9p+y6VBHYLXk2PLh2lqv9GzJMeXDtLVf6PUBZRFcLoREQBERAFghZRAcr7ouh/Bl1ZTN4hzmYB4h9IB5p5Rybejna/SzgDkVyvTnQUxa1TRsJZtfEMzHvcwcrebk6NmbNSv8AOD7oZk5Kfzg+6f6c+RYWVnGYEREAREQBERAEREAREQBERAERYQBW/QnRh07hPK39MG7Wn+Id/s/dfWh+h76giadpEeRa05GTnO5v3XWaOkDAAABl0ADctGVlf5x/ZDSlJSjjicE/1T6oqYNC3FgBZWkagREQBERAEREAREQBYKyiAoml2gMdTeam1Y5cyW/w5T/a7n2b965ViFDLTyGKZjmPHI4W6xvHOF+kFHYvhEFWzg542vHJfJzedrhmD0Km/KQx4w4L8FJ+Thc+qHBfhT88or9j3czmju+jfwrfMeQ2QcwPiu+io1ZSSQu1JY3scPJc0g/VZjjMbfqQy3GY21+pPvu74nkiIoyIIsLKAIiIAiIgCL7pqd8rgyNjnuOxrWlx9wV1wHucVEtnVTuCb5os6U/hv16FI21G56UJG2o3PSnQpdLTSTPEcTHPcdjWjNdK0U0BEZEtUA5+0M8hnOfOP06VccHwGnpG6sMYbvO17vaccz9lLNbZabEnDBjFivwarElC3jFivweMFOGr3AWUVwuhERAEREAREQBERAEREAREQBERAFq1tFFO3UmjY9u5zQ4fXYtpEBS8S7m9DLcx8JEeZxkb8L7/AEIVZre5bUt/czwvHrB0bvyPqutIoIpVqKqFeOVZirDywOGzaBYkz/Dh3O2SM/m6036JYiNtJP1AO+y78sWUKyDeakK+HtZr8dDgbNEsQOyjn6xq/dbUGgeJP/w+rzukY383XcrJZEkG817+wTw9rNTklF3Lqp372aFg9UOkd+B9VZMN7mlFHYyulmPO4xs9zc/qrwilhlWoaJzxJoZRmGkPPE0qHDoadurDFHGNzWht+nf1rcAWUVgsBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q==" /><IoMdNotificationsOutline size='25'/></Box>
    </Box>
  )
}

export default DashBoard
