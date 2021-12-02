import styled from "styled-components";


export const Container = styled.div`
    margin:auto;
    margin-top:80px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    overflow:auto;
    height:100%;

    .course{
        color:#FFF;
        font-size:20px;
    }
    @media(max-width:450px){
        .course{
            font-size:16px;
        }
    }
    
`

export const ProjectArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:30px;
    max-width:100%;

    .carousel-size{
        width:55%;
        heigth:auto;
    }

    .size {
        width: 100%;
        height:auto;
    }

    @media(max-width:770px){
        .carousel-size{
            width:70%
        }
    }
`
