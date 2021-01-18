//SRC: https://react-bootstrap.github.io/components/navbar/
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default class SideBarResp extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark">
                    <Nav>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/ViewOne">ViewOne</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/ViewTwo">ViewTwo</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
