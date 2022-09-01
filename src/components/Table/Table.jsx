import  React,{useEffect,useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import "./Table.css";


const BasicTable = () => {

   const [data,setData] = useState([]);
   useEffect(()=>{
    axios.get('http://localhost:8080/college/')
    .then(res=>{setData(res.data)})
    .catch(error => console.log(error));
   });
  return (
    <div className="Table">
      <h3>College List</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Year founded</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left">State</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">No of Students</TableCell>
                <TableCell align="left">Courses</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {data.map((data,key) => (
                <TableRow
                  key={data.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell align="left">{data.Year}</TableCell>
                  <TableCell align="left">{data.City}</TableCell>
                  <TableCell align="left">{data.State}</TableCell>
                  <TableCell align="left">{data.Country}</TableCell>
                  <TableCell align="left">{data.NoofStudents}</TableCell>
                  <TableCell align="left">{data.Courses}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}

export default BasicTable
