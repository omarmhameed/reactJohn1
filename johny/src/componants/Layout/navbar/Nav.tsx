import { NavLink } from "react-router-dom";
import './Nav.css'
function Nav() {
    return (<>

<div className="menu">
    
<NavLink to='/home'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/product' >Product</NavLink>
    
</div>
    </>  );
}

export default Nav;