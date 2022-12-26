
import React, {useState} from 'react'
import {FaBars,FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav, setnav] = useState(false)
  const listItems = [
    {
      item: 1,
      name: 'Home',
    },
    {
      item: 2,
      name: 'About',
    },
    {
      item: 3,
      name: 'Project',
    },
    {
      item: 4,
      name: 'Experience'
    },
    {
      item: 4,
      name: 'Contact',
    }
    
  ]
  
  return (
    <div className='bg-slate-900 flex h-20 w-full justify-between items-center fixed'>
    <div>
    <h1 className='text-3xl font-signature m-4 text-slate-100'>Vishal</h1>
    </div>
    {/* items */}
    <div>
        <ul className='text-white  items-center my-5 justify-evenly hidden md:flex'>


        {listItems.map(({item,name}) => (
          <li 
          key={item}
           className='px-4 hover:text-sky-500 cursor-pointer hover:font-bold  duration-200'>  <Link to={name} smooth duration={500}>
           {name}
           </Link> </li>
          
        ))
       }
       
        </ul>
        <div onClick={()=>setnav(!nav)} className='cursor-pointer pr-4 z-10 text-blue-500 text-2xl md:hidden'>
        {nav ? <FaTimes/> : <FaBars/>}
        </div>
        <div>
       {nav && (
        <ul className='flex flex-col  justify-center items-center absolute top-[80%] left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {listItems.map(({item,name}) => (
          <li 
          key={item}
           className='py-5 text-4xl hover:text-sky-500 cursor-pointer hover:font-bold  duration-200'>
            <Link
                onClick={() => setnav(!nav)}
                to={name}
                smooth
                duration={500}
              >
                {name}
              </Link>
           </li>
          
        ))
       }
       </ul>
       )}
       </div>
    </div>
     </div>
  )
}

export default Navbar