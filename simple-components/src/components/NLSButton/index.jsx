import { useState } from "react"

function NLSButton ({buttonToggle , buttonText}){
    
    

 
    
    return (
        <div>

            <button onClick={buttonToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5">{buttonText}</button>

        </div>
    )
}

export default NLSButton