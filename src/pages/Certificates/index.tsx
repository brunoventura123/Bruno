import * as C from './styles'
import { Theme } from '../../components/Theme'
import { Photo } from './photo'
import React from 'react'

export const Certificates = () => {
    return(
        <Theme>
            <C.Container>
                <C.ProjectArea>
                    {Photo.map((i,k)=>
                        <div className="certItem">
                            <img src={i} alt="" />
                        </div>
                    )}
                </C.ProjectArea>
                    <div className="course">Curso feito pela b7web.com.br</div>
            </C.Container>
        </Theme>
    )
}