import NavLink from "../NavLink"

function Footer() {
    return (
        <footer >
            <div className="flex">
                <div className="p-4">
                    <NavLink text="Email" link="#" />
                </div>
                <div className="p-4">
                    <NavLink text="Telephone" link="#" />
                </div>
            </div>
            
            
            <p className="p-4 pt-0">&copy; Copyright 2024</p>
        </footer>
    )
}

export default Footer