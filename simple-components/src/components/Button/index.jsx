
function Button({clicked, text}) {
    return (
        <div className="min-h-96 flex flex-col justify-center content-evenly items-center border-4 border-b-0 p-5">
            
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={clicked}>
                Click me!
            </button>

        </div>
        
    )
}

export default Button