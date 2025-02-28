import React, { createContext, useState } from 'react'

export const quesContext = createContext()

function QuesContext({children}) {
    let user = "vishal"
    let [qty,setQty] = useState(10)
    let [lang,setLang] = useState("")
    let [quesArray,setQuesArray] = useState(null)


  return (
    <div>
        <quesContext.Provider value={{user,qty,setQty,lang,setLang,quesArray,setQuesArray}}>
            {children}
        </quesContext.Provider>
    </div>
  )
}

export default QuesContext