import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useState } from 'react'
import {Modal} from '../../components/Modal'

type Props = {
    modal:boolean;
    opacitys:Number
}

export const About = ({modal, opacitys}:Props) => {
    const [close, setClose] = useState(false)
    const [view, setView] = useState(0)

    const openModal = () => {
        setView(0.2)
        setTimeout(() => {
            setClose(true)
            setView(1)
        }, 200);
    }
    
    const closeModal = () => {
        setClose(false)
    }
    
    return(
        <Theme >
            <C.Container >
                <C.Area>
                    <C.TextArea>
                        <p>Olá, meu nome é</p>
                        <h1>Bruno Ventura</h1>
                        <div className="bar-p"><div className='bar'></div>Um desenvolvedor freelancer & de criação front-end</div>
                        <button onClick={openModal}>Leia mais</button>
                    </C.TextArea>
                    <C.ImageArea>
                        <img src="../../../assets/images/eu.png" alt="eu mesmo" />
                    </C.ImageArea>
                </C.Area>
                {close &&
                <Modal modal={close}  onClick={closeModal}>
                <C.ModalArea opacitys={view}>
                    
                    <C.Image>
                        <img src="../../../assets/images/eu.jpg" alt="" />
                        <p>Bruno Ventura<br/>Desenvolvedor web</p>
                    </C.Image>
                    <C.Text>
                        <h2>Sobre mim</h2>
                        <p>Sou de Belo Horizonte, estado de Minas Gerais. Tenho 37 anos e atualmente resido em Capelinha, MG.
Já trabalhei como faxineiro, pedreiro, cabeleireiro, e atualmente sou professor de escola pública do estado. Trabalho com um aluno especial, surdo. Faço curso de inglês desde abril de 2021. Atualmente tenho inglês básico.
A programação entrou com tudo em minha vida. Desde que comecei a estudar todas essas tecnologias, programação se tornou uma área desejada. Me especializei em front-end, onde me adapto melhor. O que tenho focado é html / css / bootstrap / sass, JS / TS e Reactjs.
 Adoro aprender coisas novas e, todos os dias, tento engolir a documentação para aprender mais sobre cada tecnologia. Desenvolver a cada dia é o que quero!</p>
                    </C.Text>
                    <div className="close">✖️</div>
                </C.ModalArea>
            </Modal>
                }
                
            </C.Container>
        </Theme>
    )
}