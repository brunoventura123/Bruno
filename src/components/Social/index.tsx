import * as C from './styles'
import Zap from "../../assets/images/zap.png"

export const Social = () => {
    return(
        <C.Container>
           <a href="https://api.whatsapp.com/send?phone=5533999943444&text=Ol%C3%A1%2C%20vamos%20conversar%20sobre%20programa%C3%A7%C3%A3o!" target="_blank" rel="noreferrer"><img width="40px" height="40px" src={Zap} alt="zap"/></a>
        </C.Container>
    )
}