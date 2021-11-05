import * as C from './styles'
import { Theme } from '../../components/Theme'
import { Photo } from './photo'
import React from 'react'

export const Certificates = () => {
    return(
        <Theme>
            <C.Container>
                <C.ProjectArea>
                    
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        
                    </div>
                    <div  className="carousel-inner">
                        
                        <div className="carousel-item active">
                        <img src={Photo[0]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[1]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[2]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[3]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[4]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[5]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[6]} className="d-block size" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Photo[7]} className="d-block size" alt="..."/>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>                    
                    
                </C.ProjectArea>

            </C.Container>
        </Theme>
    )
}