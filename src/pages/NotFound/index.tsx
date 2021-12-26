import { useHistory } from "react-router-dom"
import * as C from './styles'


export const NotFound = () => {
    const history = useHistory()

    const handleBackButton = () => {
       history.push('/')
    }
    return(
        <C.Area>
        <button 
            onClick={handleBackButton} 
            className="button">
                Voltar
        </button>
        </C.Area>
    )
}