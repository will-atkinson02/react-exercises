import NavLink from "../NavLink"

function Nav() {
    return (
        <nav>
            <img className="bg-orange-400 p-2 inline" src="https://io-academy.uk/wp-content/themes/ioacademy/img/logo.svg" />
            <NavLink />
            <NavLink />
            <NavLink />
        </nav>
    )
}

export default Nav