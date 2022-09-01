import React from 'react'
import './MainDash.css';
import Cards from '../Cards/Cards.jsx';
import BasicTable from '../Table/Table.jsx';
import StudentTable from '../Table/StudentTable';


const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <BasicTable />
        <StudentTable />
    </div>
  )
}

export default MainDash
