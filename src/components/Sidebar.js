import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


export default function Sidebar() {
    const {user} = useAuthContext();
  return (
    <div className='sidebar'>
        <div className="sidebar-content">
            <div className="user">
                <Avatar src={user.photoURL} />
                <p>Hey {user.displayName}</p>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img src={DashboardIcon} alt="dashboard icon" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/create">
                            <img src={AddIcon} alt="addcproject icon" />
                            <span>New project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      
    </div>
  )
}
