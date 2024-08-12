import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom";

const Header = () => {
 
// justerer fargen på <link> taggen så den ikke ser ut som en standard hyperlink
    const lenkeStil= {
        
        textDecoration: "none",
        color: 'white'
      };
//styler navigasjons bar 
// flytende beholder som gjør at navigasjonsmenyen spenner over hele bredden
return (
    <Navbar className ="nav-bar-edit" bg="dark" variant="dark" expand="lg">
        <Container  fluid>
            <Navbar.Brand href="/" style={{"color":'white'}}>
                TV2
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Nyheter</NavLink>
                    <NavLink className ="nav-link" to="/"><Link to="/Alle" style={lenkeStil} >Alle filmer</Link></NavLink>
                         
                </Nav>
                <Button variant="outline-info" className="me-2"><Link to="/NotFound" style={lenkeStil} >Logg inn</Link></Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header