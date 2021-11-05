import * as C from './styles'
import React from 'react'
import { Theme } from '../../components/Theme'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import * as Photos from '../../services/photos'
import {Photo} from '../../types/Photo'
import {PhotoItem} from '../../components/PhotoItem'
import {Info} from '../../Info'




export const Technology = () => {
    
    const [titleInfo, setTitleInfo] = useState(Info[0].title)
    const [textInfo, setTextInfo] = useState(Info[0].text)
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    const cathPhoto = (e:JSON) =>{
        let item = e.toString()
            
        if(item.indexOf('1.png') > -1){
            setTitleInfo(Info[0].title)
            setTextInfo(Info[0].text)
        } else if(item.indexOf('2.png') > -1){
            setTitleInfo(Info[1].title)
            setTextInfo(Info[1].text)
        } else if(item.indexOf('3.png') > -1){
            setTitleInfo(Info[2].title)
            setTextInfo(Info[2].text)
        } else if(item.indexOf('4.png') > -1){
            setTitleInfo(Info[3].title)
            setTextInfo(Info[3].text)
        } else if(item.indexOf('5.png') > -1){
            setTitleInfo(Info[4].title)
            setTextInfo(Info[4].text)
        } else if(item.indexOf('6.png') > -1){
            setTitleInfo(Info[5].title)
            setTextInfo(Info[5].text)
        } else if(item.indexOf('7.png') > -1){
            setTitleInfo(Info[6].title)
            setTextInfo(Info[6].text)
        } else if(item.indexOf('8.png') > -1){
            setTitleInfo(Info[7].title)
            setTextInfo(Info[7].text)
        } else if(item.indexOf('A.png') > -1){
            setTitleInfo(Info[8].title)
            setTextInfo(Info[8].text)
        } else if(item.indexOf('B.png') > -1){
            setTitleInfo(Info[9].title)
            setTextInfo(Info[9].text)
        } 
    
}
        
        
    useEffect(()=>{
        const getPhotos = async ()=>{
            setLoading(true)
            setPhotos(await Photos.getAll()) 
            setLoading(false)
        }
        getPhotos()
    },[])

    

    return(
        <Theme>
            <C.Container>
                <C.SliderArea>
                    {loading && 
                        <C.ScreeanWarning>
                            <div className="emoji">✋</div>
                            <div>Carregando...</div>
                        </C.ScreeanWarning>
                    }
                    {!loading && photos.length > 0 &&
                        <C.PhotoList>
                            {photos.map((item, index)=>(
                                <PhotoItem 
                                    onClick={cathPhoto}  
                                    key={index} 
                                    url={item.url}
                                       />
                            ))}
                        </C.PhotoList>
                    }

                    {!loading && photos.length === 0 &&
                        <C.ScreeanWarning>
                            <div className="emoji">😭</div>
                            <div>Não há fotos para exibir</div>
                        </C.ScreeanWarning>
                    }
                    
                </C.SliderArea>
                <C.InfoArea>
                    
                     
                    {Info.length > 0 &&
                    <>
                    <div  className="firstInfo">
                        <h2>{titleInfo}</h2>
                        <p>{textInfo}</p>
                    </div>
                    <div className="buttons">
                    <div><Link to="/projects"><button >Projetos</button></Link>
                    <Link to="/certificates"><button style={{backgroundColor:'#B8960C'}}>Certificados</button></Link>
                    </div>
                    </div>
                    </>
                    }
                    
                </C.InfoArea>
            </C.Container>
        </Theme>
    )
}


