import React from 'react'

const Dropdown = ({icon, name}) => {
  return (
   <>
   <div className='mb-4' style={{width:'100%',height:'70px',border:'1px solid #dfdadaff',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
     <div style={{display:'flex',width:'80%' ,alignItems:'center'}} >
         <div style={{width:'10%',height:'70px',display:'flex',justifyContent:'center',alignItems:'center',color:'#0f8beaff'}} >{icon}</div>
         <h5 className='text-muted' >{name}</h5>
     </div>
     <div style={{width:'5%',height:'70px',display:'flex',justifyContent:'center',alignItems:'center',color:'#0f8beaff'}} ><i class="fa-solid fa-angle-down"></i></div>

   </div>
   </>
  )
}

export default Dropdown