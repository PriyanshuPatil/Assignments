import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from './css/ProjectData.module.css'
import { useSelector } from 'react-redux';
const ProjectData = () => {
    const name_logo = [];
    const navigate = useNavigate();
    const { loading, projectData } = useSelector((store) => store.Project)
    const capitalizeFirstLetter = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Box className={style.project_parent}>
            {projectData.map((el, index) => {
                return <Box className={style.project_child} onClick={() => navigate(`/project/${el._id}`)}>
                    <Box backgroundColor={index % 4 == 0 ? "blue" : index % 3 == 0 ? "orange" : index % 2 == 0 ? "purple" : "gray"} >{el.name.split(" ").length == 1 ? <Box>{el.name.split(" ")[0][0].toUpperCase()}</Box> : <Box>{el.name.split(" ")[0][0].toUpperCase() + el.name.split(" ")[1][0].toUpperCase()}</Box>} </Box>
                    <Box className={style.project_data}>
                        <Box>{capitalizeFirstLetter(el.name)}</Box>
                        <Box>{el.episodes} Episodes</Box>
                        <Box>Last Edited on {el.last_edit}</Box>
                    </Box>
                </Box>
            })}
        </Box>
    )
}

export default ProjectData