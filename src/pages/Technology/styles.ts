import styled from "styled-components";

export const Container = styled.div`
    height:calc(100vh - 100px);
    padding:20px 70px;
    margin-top:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    overflow:auto;
    color:#FFF;
    
`
export const SliderArea = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:30px;

`

export const InfoArea = styled.div`
    width:50%;
    padding: 0px 50px;
    border-left: 1px solid #f1c40f;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    .firstInfo{
        text-align:center;
        display:block;
        margin-bottom:50px;


        h2{
            color:#fff;
            font-size:32px;
            font-weight:bold;
            margin-bottom:30px;
            text-shadow:1px 1px 3px #02044A;
        }
        p{
            font-size: 18px;
            margin:auto;
            width:80%;
        }
    }
    .buttons {
        text-align:center;
    }
    button{
        width:155px;
        outline:0;
        border:0;
        background-color: #02044A;
        padding: 10px 15px;
        color:#FFF;
        border-radius:10px;
        margin-right:10px;
        margin-bottom:10px;
        font-weight:600;

        &:hover{
            opacity:0.8;
        }
    }
    
`
export const ModalArea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0px 0px 5px #f1c40f;
    width:80vw;
    height:80vh;
    background-color:#222;
    border-radius:30px;

    img{
        width:auto;
        height:100%;
    }
`
export const ScreeanWarning = styled.div`
    text-align:center;

    .emoji{
        font-size:50px;
        margin-bottom:20px;
    }
`
export const PhotoList = styled.div`
    display:flex;
    flex-wrap:wrap;
`
