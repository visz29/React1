import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {quesContext} from '../../context/QuesContext'
import all_css from '../../css/all_css'

function Home() {

  let user = useContext(quesContext)
  console.log((all_css()).home2);
  
  return (
    <div className={`flex flex-col items-center h-9/11 w-full bg-black/20  ${(all_css()).home1}`}>
      {/* <h1>{user.user}</h1> */}
      <h1 className={`mt-10.5 text-2xl text-cyan-400/60 ${(all_css()).home2}`}>This a MCQ Test Prectice Site</h1>
      <ul className={`list-disc mt-12 w-8/10 text-md text-gray-400/70 flex justify-center items-center ${(all_css()).home3}`}>
        <li>Intructions :
          <ul className='list-[upper-roman]'>
            <li>Click on the language you want to test </li>
            <li>Select the question quantity and click on “Start Test”</li>
            <li>When you reach the last question, click the "Submit" button</li>
            <li>After clicking the button you will be able to see your result</li>
            <li>After seeing the result please click on “Answer” button</li>
            <li>To see all the correct answers to your test</li>
          </ul>
        </li>
        
      </ul>
      <Link to={"quizList"} className={`bg-purple-300/30 border-2 flex justify-center items-center border-purple-300 w-3/5 h-1/10 rounded-2xl mt-20 text-4xl text-white/50 ${(all_css()).home5}`}>Take a Test</Link>
    </div>
  )
}

export default Home