import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useEffect, useState } from 'react'
import {Modal} from '../../components/Modal'
import I from "../../assets/images/eu.png"


export const About = () => {

    const [close, setClose] = useState(false)
    const [view, setView] = useState(0)
    const [move, setMove] = useState(false)

    const openModal = () => {
        setView(0)
        setTimeout(() => {
            setView(1)
            setClose(true)
        }, 100);
    }
    
    
    useEffect(()=>{
        setMove(true)
    },[])

    return(
        <Theme >
            <C.Container >
                <C.Area>
                    <C.TextArea move={move}>
                        <p>Olá, meu nome é</p>
                        <h1>Bruno Ventura</h1>
                        <div className="bar-p"><div className='bar'></div>Um desenvolvedor front-end</div>
                        <button onClick={openModal} title="Mais informações sobre Bruno Ventura">SAIBA MAIS</button>
                    </C.TextArea>
                    <C.ImageArea move={move}>
                        <img width="auto" height="100%" src={I} alt="eu mesmo" />
                    </C.ImageArea>
                </C.Area>
                {close &&
                <Modal modal={close}  onClick={()=>setClose(false)}>
                    <C.ModalArea opacitys={view}>
                        <C.Image>
                            <img width="auto" height="100vh" src={I} alt="" />
                            <p>Bruno Ventura<br/>Desenvolvedor web</p>
                        </C.Image>
                        <C.Text>
                            <h2>Sobre mim</h2>
                            <p>Sou Bruno Ventura natural de Belo Horizonte. Tenho 37 anos e trabalho atualmente como Professor pelo Estado. Curso inglês desde abril de 2021, sei o inglês básico.
                                Tenho conhecimento em HTML5, CSS3, Bootstrap5, SASS, Webpack, React, Typescript, Git/GitHub, Firebase, expressão regular e bancos de dados.
                                Fiz curso de programação pela b7web.com.br, onde aprendi essas tecnologias e tenho desenvolvido vários projetos, colocando
                                em prática todo conhecimento adquirido. Como observado estou focado no front-end, mas atualmente tenho iniciado meus estudos
                                no back-end para entender o funcionamento por trás dos panos. Todo esse portifolio foi feito usando React e algumas outras bibliotecas, além do
                                typescript que tenho usado em todos os meus projetos pessoais.
                            </p>
                        </C.Text>
                    </C.ModalArea>
            </Modal>
                }
            </C.Container>
        </Theme>
    )
}


