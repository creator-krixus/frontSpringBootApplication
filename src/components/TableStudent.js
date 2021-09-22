import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import '../styles/Tablestudents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'

export default function TableStudent() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/getAll`)
    .then(res=>res.json())
    .then(result=>{
        setStudents(result);
        
    })
  }, [])
  return (
    <Container maxWidth="lg">
      <Paper elevation={4}>
      <h2>Estudiantes activos</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left" >Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Addres</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="left">{student.name}</TableCell>
              <TableCell align="left">{student.lastName}</TableCell>
              <TableCell align="left">{student.email}</TableCell>
              <TableCell align="left">{student.addres}</TableCell>
              <TableCell align="left"><FontAwesomeIcon icon={faEdit} className="item_icon"/><FontAwesomeIcon icon={faTrashAlt} className="item_icon"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </Container>
  );
}


