import React from 'react'
import { IoMdStarHalf,IoMdHeart } from "react-icons/io";
import Button from './button';
import Icons from './icons';
import Boxes from './boxes';


const Text = () => {

  const boxesData = [
    { color: '#718CAA', size: '28px' },
    { color: '#4A4D5E', size: '24px' },
    { color: '#E586E2', size: '24px' },
    { color: '#E6B63A', size: '20px' },
    { color: '#5EA219', size: '24px' },
  ];


  return (
    <div className='py-20 grid items-center justify-center p-12 bg-[#E4E6F2] rounded-1-2xl'>
        <h2 className=' text-[12px] md:text-3xl lg:text-[4rem] lg:leading-10 font-semibold text-[#4A4D5E] '>Soft fleece cat sweater </h2>

        <div className=' flex my-5 text-2xl gap-4 '>
          <div className='flex items-center justify-center text-[#E6B63A] '>
            <Icons/>
            <Icons/>
            <Icons/>
            <Icons/>
          <IoMdStarHalf />
          </div>
         <p>345 ratings</p>
        </div>

       <div className='flex items-center gap-7 my-5 text-2xl font-semibold '>
         <h3 className=''>Color</h3>
         <div className='flex items-center justify-center'>
          {boxesData.map((box,index) =>(
           <Boxes key={index} color={box.color}
            size={box.size}/>
          ))}
           </div>
       </div>

       <div className='flex items-center gap-5 text-2xl font-semibold my-8'>
        <h3>Size</h3>
          <p className='border-2 border-[#4A4D5E] rounded-lg px-2 '>S</p>
         <p>M</p>
         <p>L</p>
         <p>XL</p>
        
       </div>

       <h2 className='text-4xl font-semibold my-3' >$ 14.99</h2>

       <div className='flex items-center'>
        <Button/>
        <div className='m-3 p-2 text-[rgb(74,77,94)] border-2 border-[#4A4D5E] text-4xl rounded-lg'>
         <IoMdHeart />
        </div>
       </div>

    </div>
  )
}

export default Text;