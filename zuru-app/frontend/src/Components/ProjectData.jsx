import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './css/ProjectData.module.css'
const ProjectData = ({ Data }) => {
    const name_logo = [];
    const navigate = useNavigate();
    const currentTimestamp = Date.now();
    // Create a new Date object using the current timestamp
    const currentDate = new Date(currentTimestamp);
    // Extract date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const day = currentDate.getDate();
    const capitalizeFirstLetter = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    return (
        <Box className={style.project_parent}>
            {Data.map((el, index) => {
                return <Box className={style.project_child} onClick={() => navigate(`/project/${"1"}`)}>
                    <Box backgroundColor={index % 4 == 0 ? "blue" : index % 3 == 0 ? "orange" : index % 2 == 0 ? "purple" : "gray"} >{el.name.split(" ").length == 1 ? <Box>{el.name.split(" ")[0][0].toUpperCase()}</Box> : <Box>{el.name.split(" ")[0][0].toUpperCase() + el.name.split(" ")[1][0].toUpperCase()}</Box>} </Box>
                    <Box className={style.project_data}>
                        <Box>{capitalizeFirstLetter(el.name)}</Box>
                        <Box>{el.episodes} Episodes</Box>
                        <Box>Last Edited on {`${year}-${month}-${day}`}</Box>
                    </Box>
                </Box>
            })}
        </Box>
    )
}

export default ProjectData