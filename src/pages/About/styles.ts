import styled from "styled-components";

export const Container = styled.div`
    height:calc(100vh - 80px);
    margin:auto;
    margin-top:80px;    
    display:flex;
    align-items:center;
    justify-content:space-between;
    overflow:hidden;
`
export const Area = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:auto;
    width:100%;
    height:100%;
    padding:0 40px;

    @media(max-width:760px){
        padding:0 10px;
    }
`

export const TextArea = styled.div<{ move: boolean }>`
    font-family: 'Open Sans', sans-serif;
    color:#FFF;
    margin-left:${props => props.move ? '10%' : '-50%'};
    opacity:${props => props.move ? 1 : .3};
    transition:all ease 2s;
    width:50%;

    h1{
        font-size:70px;
        font-weight:normal;
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
        color: #02044A;
        font-weight:bold;
        border-radius:22px;
        transition:all ease .5s;

        &:hover{
            opacity:0.9;
            transform: scale(1.1);
            padding:10px 30px;
            box-shadow:0px 0px 10px #f1c40f;
            text-shadow:0px 0px 10px #fff;
        }
    }
    @media(max-width:760px){
        width:50%;  
        z-index:77;
        h1{
            font-size:45px;
        }
        .bar-p{
            text-shadow:0px 0px 3px #000;
            font-weight:bold;
        }
    }

    @media(max-width:450px){
        button{
            padding: 5px 10px;
            font-size:13px;
            
        }
    }
`

export const ImageArea = styled.div<{ move: boolean }>`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:${props => props.move ? '10%' : '-50%'};
    opacity:${props => props.move ? 1 : .3};
    transition:all ease 2s;
    width:50%;
    height:100%;

    img{
        height:100%;
    }

`
export const Modal = styled.div<{ modal: boolean, opacitys: number }>`
    display:${props => props.modal ? 'none' : 'flex'};
    opacity:${props => props.opacitys};
    background-color:rgba(0,0,0, 0.7);
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
    transition:all ease .5s;
    
`
export const ModalArea = styled.div<{ opacitys: number }>`
    transition:all ease .5s;
    opacity:${props => props.opacitys};
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0px 0px 5px #fff;
    width:80vw;
    height:80vh;
    background-color:#222;
    border-radius:30px;
    padding:50px;
    color:#F3F3F3;
    z-index:999 !important;

    @media(max-width:1100px){
        padding:30px;
    }

    @media(max-width:900px){
        flex-direction:column;
        overflow:auto;
        justify-content:start;
    }
    @media(max-width:470px){
        padding:20px;
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
        box-shadow:0px 0px 3px #fff;
        margin-bottom:20px;
    }
    p{
        font-size:22px;
        font-weight:bold;
        color:#f3f3f3;
        text-align:center;
        font-family:sans serif;
        
    }

    @media(max-width:1100px){
        img{
            width:150px;
            height:150px;
        }
        p{
            font-size:20px;
        }
    }
    @media(max-width:900px){
        flex-direction:row;
        border:0;
        padding:0;
        justify-content:flex-start;
        width:100%;
        img{
            width:100px;
            height:100px;
            margin-right:20px;
        }
        p{
            font-size:20px;
            text-align:start;
        }
    }

    @media(max-width:470px){
        img{
            width:70px;
            height:70px;
        }
        p{
            font-size:16px;
        }
    }
`

export const Text = styled.div`
    @keyframes about{
        from {opacity:.2;font-size:23px;}
        to {opacity:1;font-size:28px;}
    }
    flex:1;
    padding-left:50px;
    h2{
        height:40px;
        color: #f1c40f;
        animation-duration: 1.5s;
        animation-name: about;
        animation-iteration-count: infinite;
        font-family:sans serif;
    }
    p{
        font-size:20px;
        font-family: 'Sriracha', cursive;
        color:#ccc;
    }

    @media(max-width:1100px){
        padding-left:30px;
        h2 {
            font-size:22px;
        }
        
        p{
            font-size:17px;
        }
    }

    @media(max-width:900px){
        padding:0;
    }
    @media(max-width:470px){
        h2{
            font-size:19px;
        }
        p{
            font-size:15px;
        }
    }
`