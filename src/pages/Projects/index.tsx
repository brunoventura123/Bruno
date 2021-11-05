import * as C from './styles'
import { Theme } from '../../components/Theme'
import React from 'react'
import {Photo} from './photo'

export const Projects = () => {
    return(
        <Theme>
            <C.Container>
                <C.ProjectArea>
                <h3>Todos os projetos estão no GitHub/GitHub Pages</h3>
                    <div className="project">
                        {Photo.map((item, index)=>
                            <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noreferrer"
                                >
                                <img  
                                key={index} 
                                src={item.img} 
                                alt="" 
                                
                                /></a>
                        )}
                    </div>
                </C.ProjectArea>

            </C.Container>
        </Theme>
    )
}