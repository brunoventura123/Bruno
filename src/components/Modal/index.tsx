import * as C from './styles'

type Props = {
    children:any,
    modal:boolean,
    onClick:()=> void
}

export const Modal = ({children, modal, onClick}:Props) => {
    return(
        <C.Container modal={modal} onClick={onClick}>
            {children}
        </C.Container>
    )
}