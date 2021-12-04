import * as C from './styles'
import { NavLink} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import {Social} from '../Social'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { useState } from 'react'


export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

   
    return(
        <C.Container>
        <Navbar className="nav" color="transparent" dark expand="md">
            <NavbarBrand to="/"><img width="200px" height="auto" src={Logo} alt="Logo do site" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    <NavItem>
                            <NavLink to="/" activeClassName="selected">Sobre Mim</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/technology" activeClassName="selected">Tecnologias</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/projects" activeClassName="selected">Projetos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/certificates" activeClassName="selected">Certificados</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" activeClassName="selected">Contatos</NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
          <Social/>
        </C.Container>
    )
}