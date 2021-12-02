import { ReactNode } from 'react'
import * as C from './styles'
import {Header} from '../Header'

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {
    return(
        <C.Container >
                <Header/>
                <C.PrincipalArea>
                    {children}
                </C.PrincipalArea>
        </C.Container>
    )
}