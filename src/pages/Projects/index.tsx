/* eslint-disable jsx-a11y/anchor-is-valid */
import * as C from './styles'
import { Theme } from '../../components/Theme'
import React, { useEffect, useState } from 'react'
import {Photo} from './photo'

type Movie = {
    titulo:string;
    avatar:string
}

export const Projects = () => {
   
    return(
        <Theme>
            <C.Container>
                <C.ProjectArea>
                <h3>Todos os projetos estão no GitHub/GitHub Pages - Total: ({Photo.length})</h3>
                    <div className="project">
                        {Photo.map((item, index)=>
                            <a 
                                key={index}
                                href={item.url} 
                                target="_blank" 
                                rel="noreferrer"
                                >
                                <img   
                                src={item.img} 
                                alt="" 
                                />
                                <div className="desc">{item.desc}</div>
                                </a>
                        )}
                    </div>
                </C.ProjectArea>
            </C.Container>
        </Theme>
    )
}