import React from 'react'
import Dropdown from './Dropdown'

const AccountOpen = () => {
  return (
    <>
    <div className="container p-5 ">
        <div className="row">
            <div className="col-9">
                <Dropdown icon={<i class="fa-solid fa-circle-plus"></i>} name='Account Opening'  />
                <Dropdown icon={<i class="fa-solid fa-user"></i>} name='Your Zerodha Account'  />
                <Dropdown icon={<i class="fa-solid fa-cat"></i>} name='Kite'  />
                <Dropdown icon={<i class="fa-solid fa-indian-rupee-sign"></i>} name='Funds'  />
                <Dropdown icon={<i class="fa-solid fa-circle"></i>} name='Console'  />
                <Dropdown icon={<i class="fa-solid fa-money-bill-1"></i>} name='Coin'  />
            </div>
            <div className="col-3">
                <div style={{borderLeft:'10px solid orangered',height:'150px',background:'#ffe0e4ff',display:'flex',alignItems:'center'}}>
                         <ul >
                            <li><a href="">Adjustment of F&O contracts of CAMS on account of Split</a></li>
                            <li className='mt-2' ><a href="">Surveillance measure on scrips - November 2025</a></li>
                         </ul>
                </div>
                <table class="table border mt-4 ">
                    <thead>
                        <tr>
                            <th className='p-3'>Quick links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td className='p-3' ><a style={{textDecoration:'none'}} href="">1.Track account opening</a></td>
                        </tr>
                        <tr>
                            <td className='p-3' ><a style={{textDecoration:'none'}} href="">2.Track segment activation</a></td>
                        </tr>
                        <tr>
                            <td className='p-3' ><a style={{textDecoration:'none'}} href="">3.Intraday margins</a></td>
                        </tr>
                        <tr>
                            <td className='p-3' ><a style={{textDecoration:'none'}} href="">4.Kite user manual</a></td>
                        </tr>
                        <tr>
                            <td className='p-3' ><a style={{textDecoration:'none'}} href="">5.Learn how to create a ticket</a></td>
                        </tr>
      
   
                    </tbody>
                </table>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default AccountOpen