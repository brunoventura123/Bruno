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

   
    return(
        <C.Container>
        <Navbar className="nav" color="transparent" dark expand="md">
            <NavbarBrand to="/"><img width="200px" height="auto" src={Logo} alt="Logo do site" /></NavbarBrand>
            <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    <NavItem>
                        <NavLink to="/bruno">Sobre Mim</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/technology">Tecnologias</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/projects">Projetos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/certificates">Certificados</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact">Contatos</NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
          <Social/>
        </C.Container>
    )
}