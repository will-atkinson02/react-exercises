import { useState } from "react"

function MegaCounter() {
    

    const [counts, setCounts] = useState(0)
    const [inc, setInc] = useState(1)

    // Add counts function
    function addCounts() {
        setCounts(counts+inc)
    }


    // Add increment function
    function addIncrement() {
        setInc(inc+1)
    }



    // Show error 
    const [errorClass, setErrorClass] = useState('hidden')

    function showError() {
        setErrorClass('block p-10')
    }

    // Error clear
    function clearError() {
        setError('')
        setErrorClass('hidden')
    }

    // Error timeout
    function errorTimeout() {
        setTimeout(clearError, 5000) 
    }

    // Subtract Increment function
    const [error, setError] = useState('')

    function subtractIncrement() {
        if (inc > 1) {
            setInc(inc-1)
        } else {
            setError("ERROR: You cannot use an increment less than 1!")
            showError()
            errorTimeout()
        }
    }
    
    // reset increment function
    function resetIncrement() {
        setInc(1)
    }


    // reset counts function
    function resetCounts() {
        setCounts(0)
    }

    
    return (
        <div className="min-h-96 flex flex-col justify-center content-evenly items-center border-4 border-b-0 p-5">
           
            <button onClick={addCounts} className="block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add Count</button>
            <p className="p-10">Counts: {counts}</p>
            <p className="p-10">Increment: {inc}</p>
            <div className="flex flex-row">
                <button onClick={addIncrement} className="block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">+</button>
                <button onClick={subtractIncrement} className="block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">-</button>
            </div>

            <p className={errorClass}>{error}</p>
            
            <div className="flex flex-col">
                <button onClick={resetIncrement} className="block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Reset Increment</button>
                <button onClick={resetCounts} className="block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Reset Counts</button>
            </div>
            

        </div>
    )
}

export default MegaCounter