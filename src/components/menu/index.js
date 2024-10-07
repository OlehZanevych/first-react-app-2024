import './style.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to='/'>All Users</Link></li>
                <li><Link to='/add-user'>Add new User</Link></li>
                <li><Link to='/departments'>Departments</Link></li>
            </ul>
        </div>
    );
}

export default Menu;