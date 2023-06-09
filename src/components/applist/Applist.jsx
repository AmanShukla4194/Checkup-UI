import React from 'react'
import Content from "../appcontent/Appcontent";
import "./applist.css";
import Search_icon from '../../assests/Search_icon.png'

function AppointmentsList() {
  
  const details={
    time:'9:30Am',
    date:'23-04-2023',
    name:'Aman Shukla',
    id:'SP007',
    condition:'Fever',
  };
  
  let list=[];
  for (let i=0;i<50;i++){
    list[i]=details;
  }

  return (
   <>
      <div>
        <input className='search-bar' type="text" id='search' name='search' placeholder="Search by Patient's name..." />
        <img className=" search-bar search-icon" src={Search_icon} alt="img"/>
      </div>
      <div className="titles">
        <span>Time</span>
        <span>Date</span>
        <span>Patient Name</span>
        <span>ID</span>
        <span>Condition</span>
      </div>
      
      <div className="container">
      {list.map(()=><Content name={details.name} time={details.time} date={details.date} id={details.id} condition={details.condition}/>)}
    </div>
   </>
  );
}
export default AppointmentsList;
