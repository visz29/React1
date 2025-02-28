import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { quesContext } from '../../context/QuesContext'
import all_css from '../../css/all_css'

function QuizList() {
  
  let data = useContext(quesContext)
  function setLanguage(e){
    console.log(e.target.innerHTML);
    
    data.setLang(e.target.innerHTML)
  }
  return (
    <div className='w-screen h-8/10  flex justify-center items-center flex-col'>
      <h1 className='w-9/10 h-2/14  flex justify-center items-center text-white/20 text-5xl font-bold'>SELECT TOPIC</h1>
    <div className={`bg-pink-300/10 backdrop-blur-xs w-4/5 h-3/4 mt-7 mb-10 rounded-2xl shadow-md   justify-items-center items-center grid grid-cols-2 gap-4 ${(all_css()).quizList1}`}>
      
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 text-xl pt-1 pb-1 ' >HTML</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 text-xl pt-1 pb-1 '>CSS</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-5 pr-7 pt-1 pb-1 text-xl'>JavaScript</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 pt-1 pb-1 text-xl '>React</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 pt-1 pb-1 text-xl '>Python</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 pt-1 pb-1 text-xl '>C++</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 pt-1 pb-1 text-xl '>Java</Link>
  </button>
        <button className='button w-30 h-14 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  ' onClick={setLanguage}>
    <Link to={"/qty"} className='text-white w-full h-full pl-7 pr-7 pt-1 pb-1 text-xl '>Kotlin</Link>
  </button>
      </div>
      </div>
  )
}

export default QuizList