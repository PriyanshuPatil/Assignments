import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import style from './css/TableData.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Delete_sub_project_axios } from '../Redux/subProjectReducer/subProjectReducer.action'
const TableData = ({ Data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <>
      <TableContainer className={style.table}>
        <Table className={style.table_parent}>
          <Thead>
            <Tr>
              <Th>Names</Th>
              <Th>Upload Data & Time</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((el) => {
              return <Tr>
                <Td>{el.name}</Td>
                <Td>{el.date}</Td>
                <Td>Done</Td>
                <Td className={style.table_button}><Button onClick={() => { navigate(`/editpage/${el._id}`) }}>Edit</Button><Button onClick={() => { dispatch(Delete_sub_project_axios(el._id, el.project_id)) }}>Delete</Button></Td>
              </Tr>
            })}

          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableData