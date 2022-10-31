import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import './Navigation.css'
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/");
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <span class='fa-stack fa-lg' style={{ color: '	#191970' }}>
                            <i class='fas fa-circle fa-stack-2x' ></i>
                            <i class='fas fa-comment fa-stack-1x fa-inverse'></i>
                        </span>
                    </Navbar.Brand>
                </LinkContainer>
                <div class="header">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/">
                                <Nav.Link><i class="fa fa-fw fa-home"></i>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link><i class="fa fa-fw fa-user"></i>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/chat">
                                <Nav.Link><i class="fas fa-comment "></i>Chat</Nav.Link>
                            </LinkContainer>
                            {user && (
                                <NavDropdown
                                    title={
                                        <>
                                            <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                            {user.name}
                                        </>
                                    }
                                    id="basic-nav-dropdown"
                                >
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item> */}
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Container>
        </Navbar>
    );
}

export default Navigation;
