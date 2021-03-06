import * as C from './styles'
import { Theme } from '../../components/Theme'
import Linkedin from '../../assets/images/linkedin.png'
import Insta from '../../assets/images/insta.png'
import Git from '../../assets/images/git.png'
import React, { FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router'



export const Contact = () => {
    const history = useHistory()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [send, setSend] = useState(false)
    const [color, setColor] = useState('')

    const regName = /^([A-zÁ-ú]{2,})\s([A-zÁ-ú\s]{2,})$/g
    const regEmail = /^([A-z0-9.\-?]{1,})@([A-z0-9]{1,})\.([A-z0-9]{1,})(\.[A-z]{1,})?$/g

    useEffect(()=>{
        if(regName.test(name) && regEmail.test(email) && message !== '' ){
            setColor('2px solid green')
        } else {
            setColor('2px solid transparent')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name, email, message])

    let data = `Name: ${name}, Email: ${email}, Message: ${message}.`
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if( regName.test(name) && regEmail.test(email) && message !== ''){
            setSend(true)
            setName('')
            setEmail('')
            setMessage('')
            console.log(data)
           
     } else{
            alert('Informações estão incorretas, por favor digite novamente!')
            setName('')
            setEmail('')
        } 
    }

    const handleSend = () => {
        setSend(false)
        history.push('/')
    }

    return(
        <Theme>
            <C.Container sends={send} >
                <C.FormArea colors={color}>
                    <div className="contactArea">
                    <div className="contact">FORMULÁRIO DE CONTATO</div>
                    
                    <form  action="https://formsubmit.co/brunoventura70@gmail.com" method="POST" id="form" onSubmit={handleSubmit}>
                        
                        <input 
                            required
                            type="text" 
                            name="name"
                            placeholder="Nome completo"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            tabIndex={0}
                            />
                        <input 
                            required
                            type="email" 
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        <textarea 
                            required
                            placeholder="Digite sua mensagem"
                            name="message" 
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            />
                        <input 
                            type="submit" 
                            value="Enviar"
                            title="Enviar formulário"
                            />
                    </form>
                    </div>
                    
                </C.FormArea>
                <C.SocialArea>
                    <h2>Contatos</h2>
                    <div className="socialarea">
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><label><img src={Linkedin} alt="" />Linkedin</label></a>
                        <a href="https://github.com/brunoventura123" target="_blank" rel="noreferrer"><label><img src={Git} alt="" />GitHub</label></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><label><img src={Insta} alt="" />Instagram</label></a>
                    </div>
                    <p>“Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.” – Rafael Lain</p>
                    <footer> 2021 - Produzido por Bruno Ventura</footer>
                    
                </C.SocialArea>
                <div className="modalsucsses">
                <div className="sucsses" onClick={handleSend}>
                        <p>Obrigado!<br/>Mensagem enviada com sucesso! <button>OK</button></p>
                    </div>
                </div>
            </C.Container>
        </Theme>
    )
}