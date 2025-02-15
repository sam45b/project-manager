import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {useLogout} from '../hooks/useLogout';
import './Navbar.css'
import Temple from '../assets/temple.svg'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {

  const {logout,isPending} = useLogout();
  const {user} = useAuthContext();
  return (
    <div className='navbar'>
        <ul>
            <li className="logo">
                <img src={Temple} alt="img" />
                <span>The Dojo</span>
            </li>

            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}
            
            {user && (
              <li>
              {!isPending && <button className="btn" onClick={logout}>Logout</button>}
              {isPending && <button className="btn" onClick={logout}>Logging out...</button>}
              </li>

            )}


        </ul>
      
    </div>
  )
}
