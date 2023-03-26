import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './context/GlobalState'


export const Header = () => {
    const { token, logout } = useContext(GlobalContext)

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Movie App</Link>
                    </div>

                    <ul className="nav-links">
                        {!token && (<>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>

                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>)}
                        {token && (<>
                            <li>
                                <Link to="/watchlist">Watch List</Link>
                            </li>
                            <li>
                                <Link to="/watched">Watched</Link>
                            </li>
                            <li>
                                <Link to="/add" className='btn'>+ Add</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={logout}>Logout</Link>
                            </li>
                        </>)}
                        
                    </ul>

                </div>
            </div>
        </header>
    )
}
