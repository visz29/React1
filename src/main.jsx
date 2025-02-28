import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

import Test from './components/Test/Test.jsx'
import QuesContext from './context/QuesContext.jsx'
import QuizList from './components/Quiz/QuizList.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import Testqty from './components/Test/Testqty.jsx'

let  qty,lang;
// const [qty1, setQty] = useState(0)
// const [lang1, setLang] = useState(0)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      {/* <Route path='html' element={<Html />} /> */}
      <Route path='quizList' element={<QuizList />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<LogIn />} />
      
      {/* <Route path='css' element={<Css />} /> */}
      {/* <Route path='javascript' element={<Javascript />} /> */}
      {/* <Route path='react' element={<Reactq />} /> */}
      <Route path='test' element={<Test />}/>
      <Route path='qty' element={<Testqty />}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <QuesContext>
    <RouterProvider router={router}/>
  </QuesContext>
  
)
