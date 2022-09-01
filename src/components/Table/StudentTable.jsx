import React,{useState,useEffect} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './StudentTable.css';
import axios from 'axios';


const StudentTable = () => {

    const [studentdata,setStudentdata] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/student/')
        .then(res=>{setStudentdata(res.data)})
        .catch(error => console.log(error));
    });

  return (
    <div className='StudentTable'>
        <h3>Student Details</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Year of Batch</TableCell>
                <TableCell align="left">College ID</TableCell>
                <TableCell align="left">Skills</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {studentdata.map((sdata,key) => (
                <TableRow
                  key={sdata.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {sdata.name}
                  </TableCell>
                  <TableCell align="left">{sdata.Year}</TableCell>
                  <TableCell align="left">{sdata.CollegeId}</TableCell>
                  <TableCell align="left">{sdata.Skills}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default StudentTable
