import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email', formData);
    console.log(response.data);
    
    if (response.data.success){
      toast.success(response.data.msg)
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <Link href='/admin' className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Admin Panel<Image src={assets.arrow}/></button>
      </Link>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[720px] m-auto text-xs sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptas placeat vel natus consequatur tenetur laboriosam voluptatibus repellat, voluptatem in assumenda explicabo, nihil eveniet rem! Voluptatum soluta aperiam id. Aperiam?</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your Email' className='pl-4 outline-none' />
            <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header
