import * as C from './styles'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import {Social} from '../Social'

type Props = {
    pro:number
}

export const Header = ({pro}:Props) => {

    const [view, setVIew] = useState(0)

    useEffect(()=>{
        setVIew(1)
    },[view])
    
    
    return(
        <C.Container pro={view}>
           <nav  className="navbar navbar-expand-lg navbar-dark ">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li  className="nav-item ">
                            <Link  className="nav-link active" to="/">Sobre Mim <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/technology">Tecnologias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/projects">Projetos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/certificates">Certificados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contatos</Link>
                        </li>
                    
                    </ul>
                </div>
            </nav>
          <Social/>
        </C.Container>
    )
}