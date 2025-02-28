import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import all_css from '../../css/all_css'

function Header() {
  return (
    <div className={`bg-black/30 transition-all duration-2000 text-white w-11/12 h-20 flex justify-center items-center flex-col rounded-2xl mt-3 mb-3 ${(all_css()).head1}`}>
      <div className=' w-full text-2xl h-1/2 flex items-center justify-evenly border-amber-50 p-1'>
        <NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-cyan-500 border-cyan-500" : "text-white/50 border-transparent"} duration-300 hover:bg-white hover:text-cyan-600 hover:border-white flex justify-center items-center border-cyan-600 border-2 p-1 text-md  rounded-xl w-20`}>HOME</NavLink>
        <div className={` w-4/6 h-full ${(all_css()).head3}`}>
          <button className={` w-2/6 h-full text-sm bg-blue-400 rounded-l-2xl ${(all_css()).head4}`}>Search</button>
          <input type="text" placeholder='Topic' className={`bg-blue-300/30 w-4/6 h-full py-0  text-white pl-4 border-none outline-none rounded-r-2xl text-sm ${(all_css()).head5}` } />
        </div>
      </div>
      <div className={` w-full h-1/2 flex items-center justify-center ${(all_css()).head2} `}>
        


        <div className='w-full h-full flex justify-evenly items-center  flex-row '>

          
          <div className=' w-2/10 text-xl flex items-center justify-center border-amber-50 '>
            <NavLink to={"/about"}
              className={({ isActive }) => `${isActive ? "text-cyan-500 border-cyan-500" : "text-white/50 border-transparent"} duration-300 hover:bg-white hover:text-cyan-600 hover:border-white flex justify-center items-center border-cyan-600 border-2   p-1 rounded-xl w-24`}>About</NavLink>
          </div>


          <div className=' w-3/10 text-xl flex items-center justify-center border-amber-50 '>
            <NavLink to={"/quizList"}
              className={({ isActive }) => `${isActive ? "text-cyan-500 border-cyan-500" : "text-white/50 border-transparent"} duration-300 hover:bg-white hover:text-cyan-600 hover:border-white flex justify-center items-center border-cyan-600 border-2   p-1 rounded-xl w-24`}>Quiz List</NavLink>
          </div>


          <div className=' w-2/10 text-xl flex items-center justify-center border-amber-50 '>
            <NavLink to={"/contact"}
              className={({ isActive }) => `${isActive ? "text-cyan-500 border-cyan-500" : "text-white/50 border-transparent"} duration-300 hover:bg-white hover:text-cyan-600 hover:border-white flex justify-center items-center border-cyan-600 border-2   p-1 rounded-xl w-24`}>Contact</NavLink>
          </div>
          

          <div className=' w-2/10 text-xl flex items-center justify-center border-amber-50 '>
            <NavLink to={"/login"}
              className={({ isActive }) => `${isActive ? "text-cyan-500 border-cyan-500" : "text-white/50 border-transparent"} duration-300 hover:bg-white hover:text-cyan-600 hover:border-white flex justify-center items-center border-cyan-600 border-2   p-1 rounded-xl w-24`}>Log_in</NavLink>
          </div>
          
          {/* <div className=''>
		      <a href='https://github.com/visz29' className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Github</a>
	      </div>
        <div className=''>
		      <a href='https://github.com/visz29' className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Instagram</a>
	      </div> */}
        </div>

      </div>
    </div>
  )
}

export default Header