import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { quesContext } from '../../context/QuesContext'
import {getQues} from '../../../ques_data'
import all_css from '../../css/all_css'

function Testqty() {

  let data = useContext(quesContext)




  return (
    <div className='w-screen h-3/4  flex justify-center items-center flex-col text-3xl text-white/50'>
      
      <label htmlFor="" className={`bg-white/10 backdrop:blur-sm w-12/14 justify-evenly items-center h-3/22 flex flex-row mb-7 rounded-2xl ${(all_css()).quizList2}`}>
        Select Qty : 
        <select name="" id="" className=' text-5xl  rounded-xl mb-0' onChange={(e)=> data.setQty(e.target.value)}>
        <option className='bg-blue-400 border-1 border-white/20' value="10">10</option>
        <option className='bg-blue-400 border-1 border-white/20' value="20">20</option>
        <option className='bg-blue-400 border-1 border-white/20' value="30">30</option>
      </select> 
      </label>
      <Link to={"/test"}  className={`w-15/28 h-2/22 bg-white/15 flex justify-center items-center rounded-xl backdrop-blur-xs ${(all_css()).quizList3}`}>Start Test</Link>
    </div>
  )
}

export default Testqty