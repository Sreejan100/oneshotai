import React,{useState} from 'react'
import './Sidebar.css';
import Logo from '../../imgs/clogo.jpeg';
import {SideBarData} from '../../Data/Data';
import {
    UilSignOutAlt
} from "@iconscout/react-unicons";

function Sidebar() {



    const [selected, setSelected] = useState(0);



  return (
    <div className="SideBar">
        {/* Logo*/}
        <div className='logo'>
            <img src={Logo} alt=""/>
            <span>
                C<span>olle</span>ges
            </span>
        </div>

        {/* Menu*/}
        <div className='menu'>
         {SideBarData.map((item,index)=>{
            return(
                <div className={selected==index?'menuItem active':'menuItem'}
                onClick={()=>setSelected(index)}
                key={index}
                >
                    <item.icon/>
                    <span>{item.heading}</span>
                 </div>   
            );
         })} 
         <div className='menuItem '>
            <UilSignOutAlt/>
        </div>
        </div>
      
    </div>
  )
}

export default Sidebar
