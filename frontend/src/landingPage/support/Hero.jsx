import React from 'react'

const Hero = () => {
  return (
    <>
     <div className="container-fluid py-4" style={{background:'#f5ebebff'}} >
        <div className='px-5 py-3 d-flex justify-content-between'  >
          <h2>Support Portal</h2>
          <button className='btn btn-primary' >My Tickets</button>
        </div>
        <div style={{width:'95%',height:'70px',border:'1px solid #c8c3c3ff',margin:'10px auto',display:'flex',borderRadius:'5px'}} >
          <div style={{width:'5%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'white',borderRadius:'5px 0px 0px 5px'}} ><i className="fa-solid fa-magnifying-glass"></i></div>
          <input style={{width:'95%',border:'none',borderRadius:'0 5px 5px 0'}} type="text" placeholder='Eg: How do I open my account, How do i activate F&O...' />
        </div>
        
   </div>
    </>
  )
}

export default Hero