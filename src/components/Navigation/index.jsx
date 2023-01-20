import "./index.css"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import Brand from '../../assets/3060853.jpg'
import { useNavigate } from "react-router";

export default function Navigation() {
    const navigate = useNavigate();

    const brandHandler = (e) => {
        e.preventDefault();
        navigate('/')
    }

    const convert = (e) => {
      e.preventDefault();
      navigate('/converter')
  }
    return(
        <div>
            <Navbar id="nav-cont">
        <Container>
          <img src={Brand} alt="brand" id="brand" onClick={brandHandler}/>
          <Nav className="me-auto">
            <Nav.Link href="https://delimaanindi.github.io/dindaportfolio.github.io/" id="link" target={"_blank"}>My portfolio</Nav.Link>
            <NavDropdown title="Features" id="link">
                <NavDropdown.Item>
                    <Nav.Link id="drop-item" onClick={convert}>Temperature Converter</Nav.Link>
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://www.linkedin.com/in/dinda-anindi-688525125/" target={"_blank"} id="link">My linkedin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>        
        </div>
            
    )
}