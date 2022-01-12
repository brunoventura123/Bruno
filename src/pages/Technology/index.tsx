import * as C from './styles'
import { Theme } from '../../components/Theme'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import * as Photos from '../../services/photos'
import { Photo } from '../../types/Photo'
import { PhotoItem } from '../../components/PhotoItem'
import { Info } from './Info'



export const Technology = () => {

    const [titleInfo, setTitleInfo] = useState(Info[0].title)
    const [textInfo, setTextInfo] = useState(Info[0].text)
    const [color, setColor] = useState(Info[0].color)
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])
    let info = 'images'

    const getPhotos = async (info: string | undefined) => {
        setLoading(true)
        setPhotos(await Photos.getAll(info))
        setLoading(false)
    }

    useEffect(() => {
        getPhotos(info)
    }, [info])



    return (
        <Theme>
            <C.Container>
                <C.SliderArea>
                    {loading &&
                        <C.ScreeanWarning>
                            <div className="loding">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <h2>Loading...</h2>
                            </div>
                        </C.ScreeanWarning>
                    }
                    {!loading && photos.length > 0 &&
                        <C.PhotoList >
                            {photos.map((item, index) => (
                                <PhotoItem
                                    onClick={() => {
                                        setTitleInfo(Info[index].title)
                                        setTextInfo(Info[index].text)
                                        setColor(Info[index].color)
                                    }}
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
                            <div className="firstInfo">
                                <h2 style={{ color: `${color}` }}>{titleInfo}</h2>
                                <p>{textInfo}</p>
                            </div>
                            <div className="buttons">
                                <Link to="/projects"><button title="Veja os projetos feitos por Bruno Ventura">Projetos</button></Link>
                                <Link to="/certificates"> <button style={{ backgroundColor: '#B8960C', color: '#FFF', textShadow: '0px 0px 10px #f1c40f' }} title="Veja os certificados de Bruno Ventura">Certificados</button></Link>
                            </div>
                        </>
                    }

                </C.InfoArea>
            </C.Container>
        </Theme>
    )
}


