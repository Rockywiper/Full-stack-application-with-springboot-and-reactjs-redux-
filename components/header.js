import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow text-white">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Student Details</a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item" >
                        <Link to="/"><button style={{marginTop: '3px', marginRight: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px'}}>Home</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add"><button style={{marginTop: '3px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px'}}>Add</button></Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;