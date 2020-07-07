import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/nav.css'
// import { ProductConsumer } from '../contextAPI';
class NavBar extends Component {
    render() {
        return (
            <div className="dashboard-Container">
                <Navbar>
                    <div haref="#" className="chatapp-text">Google ChatApp</div>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;