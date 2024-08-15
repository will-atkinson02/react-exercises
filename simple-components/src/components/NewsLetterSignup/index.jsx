
function NewsLetterSignup({visible}) {
    
    const showClass = visible + " bg-stone-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    
    return (
        <div>
            
            <form className={showClass}>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input id="email" placeholder="mrjones@hotmail.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
            </form>

        </div>
    )
}

export default NewsLetterSignup