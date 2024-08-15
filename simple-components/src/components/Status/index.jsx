import { useState } from "react"

function Status () {
    
    const [agrees, setAgrees] = useState(0)
    const [disagrees, setDisagrees] = useState(0)
    const [lowkeyAgrees, setLowkeyAgrees] = useState(0)

    function addAgrees() {
        setAgrees(agrees+1)
    }
    function addDisagrees() {
        setDisagrees(disagrees+1)
    }
    function addLowkeyAgrees() {
        setLowkeyAgrees(lowkeyAgrees+1)
    }
    
    
    return (
        <div className="min-h-96 flex flex-col justify-center content-evenly items-center border-4 border-b-0 p-5">
            <p className="p-10 text-gray-800 font-bold bg-gray-200 rounded-t">Marvel films are <strong>overhyped</strong></p>
            <div className="flex flex-row">
                <button onClick={addAgrees} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Agree - <strong>{agrees}</strong></button>
                <button onClick={addDisagrees} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">Disagree - <strong>{disagrees}</strong></button>
                <button onClick={addLowkeyAgrees} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Lowkey Agree - <strong>{lowkeyAgrees}</strong></button>   
            </div>
        </div>
    )
}

export default Status