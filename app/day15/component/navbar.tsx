import NavLink from "./navLink";
import NavSearch from "./navSearch";

export default function Navbar() {

    console.log("NavBar Rendered")
    return (
        <>
            <h2>Navbaar</h2>
            <div>
                <NavLink />
                <NavSearch />
            </div>
        </>
    )
}