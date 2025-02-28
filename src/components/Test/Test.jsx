import React, { useContext, useEffect, useState } from 'react'
import { quesContext } from '../../context/QuesContext'
import { getQues } from '../../../ques_data'
import all_css from '../../css/all_css';


let i = 0;
let result = [];
let options = [];
let optionsBg = [];
let resultScore = [];

function Test() {

  let data = useContext(quesContext)
  let [ques, setQues] = useState("")
  let [option1, setOption1] = useState("")
  let [option2, setOption2] = useState("")
  let [option3, setOption3] = useState("")
  let [option4, setOption4] = useState("")

  useEffect(() => {
    i = 0
    result = [];
    options = [];
    optionsBg = [];
    console.log(data.lang);

  }, [data.lang])

  function renderState(e) {
    let optionNumber = 0;

    setQues(result[e].question)
    setOption1(options[e][optionNumber])
    setOption2(options[e][optionNumber + 1])
    setOption3(options[e][optionNumber + 2])
    setOption4(options[e][optionNumber + 3])

    let opt = document.querySelector('#optH1')
    opt = opt.parentNode.childNodes
    opt.forEach((f, j) => {
      if (j > 0) {
        f.style.backgroundColor = optionsBg[e][j - 1]
      }
    })
  }

  function changeQues(e) {
    if (e.target.value == "add") {
      if (i < result.length - 1) { i++ }

      renderState(i)
      if (i == result.length - 1) {
        let nextBtn = document.getElementById('next')
        nextBtn.style.backgroundColor = "green"
        nextBtn.style.color = "white"
        nextBtn.innerText = "SUBMIT"
        nextBtn.value = "submit"
      }

    } else if (e.target.value == "submit") {

      resultScore = resultScore.reduce((e, f) => e + f)
      afterSubmit()

    } else {

      if (i > 0) { i-- }
      renderState(i)
      if (i < result.length - 1) {
        let nextBtn = document.getElementById('next')
        nextBtn.style.backgroundColor = "color-mix(in oklab, var(--color-white) 10%, transparent)"
        nextBtn.innerText = "Next"
        nextBtn.value = "add"
      }
    }
  }

  function afterSubmit() {
    let hide = document.querySelectorAll('#hide')
    let resultdiv = document.querySelector('.result')
    resultdiv.className = "result bg-black/20 border-5 rounded-2xl border-white/50 w-5/6 sm:w-4/6 h-5/6  flex  items-center flex-col justify-center"

    hide.forEach((e, j) => {
      if (j > 0) {
        e.innerHTML = ""
      }
    })
    let loader = document.createElement('div')
    loader.className = "loader"
    loader.className = "loader w-1/2 h-1/2 bg-black/20 border-5 rounded-2xl border-white/50 p-5 flex items-center flex-col justify-center"
    resultdiv.innerHTML = loader.outerHTML

    setTimeout(() => {
      resultdiv.innerHTML = `<h1 class='sm:text-4xl text-2xl font-extrabold text-black/50'>Your Score is ${resultScore} out of ${data.qty}</h1><br><button class="answer bg-black/20 border-3 rounded-2xl border-white/50 w-2/6 h-1/6  flex  items-center flex-col justify-center">Check Answer</button>`
      resultScore = []
    }, 2000)

  }

  function startTest(e) {
    result = getQues(data.lang, data.qty)

    for (let i = 0; i < result.length; i++) {
      let o = []
      let p = []
      for (let j = 0; j <= 3; j++) {
        o.push(<div id={j} onClick={selectOption} className={' index mb-4 bg-gray-600/0 border-2 border-gray-400/50 w-5/6 h-5/6 flex justify-center items-center   rounded-3xl hover:bg-blue-400/50 shadow-sm shadow-cyan-500 hover:shadow-md hover:-translate-y-2 hover:scale-102 transform  duration-500 transform-gpu  text-white text-md sm:text-lg font-medium'}>{result[i].options[j]}</div>)
        p.push("color-mix(in oklab, var(--color-gray-600) 0%, transparent)")
      }

      resultScore.push(0)
      options.push(o)
      optionsBg.push(p)
    }

    renderState(i)
    e.target.style.display = "none"
    let hide = document.querySelectorAll('#hide')

    hide.forEach((e) => {
      e.style.display = "flex"
    })
  }

  function selectOption(e) {
    if (e.target.innerText == result[i].answer) {
      resultScore[i] = 1;
    } else {
      resultScore[i] = 0;
    }

    e.target.style.background = "color-mix(in oklab, var(--color-green-600) , transparent)"
    optionsBg[i][e.target.id] = "color-mix(in oklab, var(--color-green-600) , transparent)"

    let opt = document.querySelector('#optH1')
    opt = opt.parentNode.childNodes
    opt.forEach((f, j) => {
      if (j > 0) {

        if (f.innerText != e.target.innerText) {
          f.style.backgroundColor = "color-mix(in oklab, var(--color-gray-600) 0%, transparent)"
          optionsBg[i][j - 1] = "color-mix(in oklab, var(--color-gray-600) 0%, transparent)"
        }
      }

    })
  }
  return (
    <div className='flex bg-purple-50/0   items-center justify-evenly flex-col w-screen h-8/10 '>
      <h1 id='hide' className='hidden w-full h-1/10 justify-center items-center text-4xl font-extrabold text-white/20'>{data.lang} -- MOCK Test</h1>
      <div className={`result w-full h-5/6  flex  items-center flex-col ${(all_css()).test1}`}>
        <main id='hide' className={`hidden w-19/20 h-full  items-center flex-col ${(all_css()).test2}`}>
          <h1 className='w-1/2 h-1/10  mb-4 flex justify-center items-center text-4xl font-extrabold text-black/30' >Q : {data.qty}/{i + 1}</h1>
          <div className={`bg-pink-200/10 text-sm  backdrop-blur-xs w-full h-9/10 flex items-center flex-col rounded-4xl border-6 border-black/30 `} >
            <h1 id='optH1' className=' mb-7 text-xl pt-2 w-5/6 h-5/6 flex justify-center items-center font-bold text-white/80'>{ques}</h1>
            {/* <div id='opt' onClick={selectOption} className=' mb-6 bg-gray-600/0 border-2 border-gray-400/50 w-5/6 h-5/6 flex justify-center items-center   rounded-3xl hover:bg-blue-400/50 shadow-sm shadow-cyan-500 hover:shadow-md hover:-translate-y-2 hover:scale-102 transform  duration-500 transform-gpu  text-white text-xl font-bold'>{option1}</div>
               <div id='opt' onClick={selectOption} className=' mb-6 bg-gray-600/0 border-2 border-gray-400/50 w-5/6 h-5/6 flex justify-center items-center rounded-3xl hover:bg-blue-400/50 shadow-sm shadow-cyan-500 hover:shadow-md hover:-translate-y-2 hover:scale-102 transform  duration-500 transform-gpu  text-white text-xl font-bold'>{option2}</div>
               <div id='opt' onClick={selectOption} className=' mb-6 bg-gray-600/0 border-2 border-gray-400/50 w-5/6 h-5/6 flex justify-center items-center   rounded-3xl hover:bg-blue-400/50 shadow-sm shadow-cyan-500 hover:shadow-md hover:-translate-y-2 hover:scale-102 transform  duration-500 transform-gpu  text-white text-xl font-bold'>{option3}</div>
               <div id='opt' onClick={selectOption} className=' mb-6 bg-gray-600/0 border-2 border-gray-400/50 w-5/6 h-5/6 flex justify-center items-center   rounded-3xl hover:bg-blue-400/50 shadow-sm shadow-cyan-500 hover:shadow-md hover:-translate-y-2 hover:scale-102 transform  duration-500 transform-gpu  text-white text-xl font-bold'>{option4}</div> */}
            {option1}
            {option2}
            {option3}
            {option4}
          </div>
        </main>
        <div id='hide' className='hidden justify-evenly sm:justify-between flex-row mt-5 sm:w-1/2 w-full' >
          <button className='p-2 bg-white/10 text-cyan-300 w-2/6 sm:w-1/4 rounded-xl' value={"sub"} onClick={changeQues} >Prev</button>
          <button id='next' className='transition duration-500 p-2 bg-white/10 text-cyan-300 w-2/6 sm:w-1/4 rounded-xl' value={"add"} onClick={changeQues} >Next</button>
        </div>
      </div>
      <div className={`w-1/2 h-1/2 felx absolute bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 z-10 rounded-2xl text-white text-5xl p-8 flex justify-center items-center ${(all_css()).home1}`} onClick={startTest}>Start Test</div>

    </div>
  )
}

export default Test

