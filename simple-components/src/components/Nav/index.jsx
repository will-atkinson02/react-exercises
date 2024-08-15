import NavLink from "../NavLink"

function Nav() {
    return (
        <nav className="flex items-stretch bg-blue-400" >
            <img className="w-1/12" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=sph" />
            
            <div className="w-1/12 flex justify-center items-center border-r-2 border-white hover:bg-blue-200">
                <NavLink text="Link 1" link="#" />
            </div>
            
            <div className="w-1/12 flex justify-center items-center border-r-2 border-white hover:bg-blue-200">
                <NavLink text="Link 2" link="#" />
            </div>
            
            <div className="w-1/12 flex justify-center items-center border-r-2 border-white hover:bg-blue-200">
                <NavLink text="Link 3" link="#" />
            </div>
            
        </nav>
    )
}

export default Nav