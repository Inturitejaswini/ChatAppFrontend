import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../contextAPI';
class AppBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="green">
                   hai
                </Navbar>
            </div>
        );
    }
}

export default AppBar;