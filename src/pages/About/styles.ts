import styled from "styled-components";

export const Container = styled.div`
    height:calc(100vh - 100px);
    margin-top:100px;
    padding:0px 100px;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Area = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const TextArea = styled.div`
    font-family: 'Open Sans', sans-serif;
    margin-right:20px;
    color:#FFF;

    h1{
        font-size:70px;
        font-weight:bold;
        margin-bottom:20px;
        
    }
    p{
        font-size:18px;
    }
    .bar-p{
        display:flex;
        align-items:center;
        margin-bottom:20px;

        .bar{
            width:35px;
            height:2px;
            background-color:#f1c40f;
            margin-right:20px;
        }
    }
    button{
        outline:0;
        border:0;
        background-color: #f1c40f;
        padding: 10px 20px;
        color:#fff;
        font-weight:bold;
        border-radius:20px;

        &:hover{
            opacity:0.9;
        }
    }
`

export const ImageArea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    img {
        width:auto;
        height: 100vh;
        opacity:.5;
    }
`
export const Modal = styled.div<{modal:boolean}>`
    display:${props=>props.modal ? 'none' : 'flex'};
    background-color:rgba(0,0,0, 0.7);
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    
`
export const ModalArea = styled.div<{opacitys:number}>`
    transition:all ease .5s;
    opacity:${props=>props.opacitys};
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0px 0px 5px #f1c40f;
    width:80vw;
    height:80vh;
    background-color:#222;
    border-radius:30px;
    padding:50px;
    color:#F3F3F3;

    .close{
        margin-top:-430px;
        margin-right:-30px;
        cursor:pointer;
    }
`

export const Image = styled.div`
    border-right: 1px solid #f1c40f;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-right:50px;

    img{
        width:200px;
        height:200px;
        border-radius:50%;
        box-shadow:0px 0px 4px #f1c40f;
        margin-bottom:20px;
    }
    p{
        font-size:22px;
        font-weight:bold;
        color:#f3f3f3;
        text-align:center;
        
    }
`

export const Text = styled.div`
    flex:1;
    padding-left:50px;

    p{
        font-size:18px;
    }
`