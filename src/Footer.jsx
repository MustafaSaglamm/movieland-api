import React from 'react';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'


const Footer = () => {
  return (
<>

<div className=' bg-bgimage bg-cover bg-center  bg-no-repeat '>


<div className='footer text-white flex justify-end  w-full h-72  md:h-48 text-center pr-3  '>
<div className='bg-black pt-10 bg-opacity-70 rounded-xl h-72 md:h-48 md:pt-8 w-full'>
       

     {/* Contact input and Send button */}

    <div className='contact'>
        <div>
        <h3 className=' '>CONTACT WİTH US</h3>
        </div>

     <div className=''>
     <input className='rounded-3xl bg-transparent mb-1 h-7 pl-3 sm:ml-10 mt-2 border-2 border-white w-60' type="text" placeholder='Enter Email Address' />
     <button className='text-white bg-transparent border-2 rounded-3xl w-20 ml-3 hover:bg-slate-100 hover:scale-105 hover:text-black transition-all' type='submit'>
     SEND    
     </button>
        </div>

    </div>


    <div>
      <div>
    {/* Description for Footer */}
        <div>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid assumenda non?</h5>
        </div>
       </div>
    </div>


<div className='justify-center'>
    <small>STAY TUNED</small>

{/* Social icons for contact */}

<div className='flex justify-center gap-1'>
  
   <AiOutlineTwitter className="icon text-3xl hover:text-cyan-400"/>
   <AiFillYoutube className="icon text-3xl hover:text-red-500"/>  
   <AiFillInstagram className="icon text-3xl hover:rounded-sm hover:bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500"/>
   <FaTripadvisor className="icon text-3xl hover:bg-green-600 hover:text-black hover:rounded-sm"/>
</div>


<div className=' flex justify-end'>
    <small className=''>Mustafa SAĞLAM - 2023</small>
</div>

</div>





    </div>
  </div>
</div>

</>

  )
}

export default Footer;