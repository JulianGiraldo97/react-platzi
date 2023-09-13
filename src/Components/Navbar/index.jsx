import { NavLink } from "react-router-dom"

const Navbar = () => {
    <nav>
        /** Left side */
        <ul>
            <li>
                <NavLink to='/'>
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/clothes'>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/fornitures'>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others'>
                    Others
                </NavLink>
            </li>
        </ul>

        /** Rigth side */
        <ul>
            <li>
                julian09426@gmail.com
            </li>
            <li>
                <NavLink to='/my-orders'>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in'>
                    Sign in
                </NavLink>
            </li>
            <li>
                Cart
            </li>
        </ul>
    </nav>
}

export default Navbar