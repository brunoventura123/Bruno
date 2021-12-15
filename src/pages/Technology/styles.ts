import styled from "styled-components";

export const Container = styled.div`
    height:calc(100vh - 80px);
    padding:20px 30px;
    margin-top:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#FFF;
    overflow:hidden;

    @media(max-width:1000px){
        overflow:auto;
        align-items:start;
    }
    @media(max-width:770px){
        flex-direction:column;
        justify-content:start;
    }
    @media(max-width:450px){
        padding: 20px 10px;
    }
`
export const SliderArea = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:30px;
    flex-wrap:wrap;
    

    @media(max-width:770px){
        width:100%;
    }
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
        font-weight:bold;

        &:hover{
            opacity:0.8;
        }
        
    }
    @media(max-width:1000px){
        justify-content:start;
        padding:0 30px;
    }
    @media(max-width:770px){
        width:100%;
        border:0;
        margin-top:50px;
        border-top: 1px solid #f1c40f;

        button{
            width:200px;
        }
       
            .firstInfo{
                h2{
                    font-size:25px;
                }
                p{
                    font-size:16px;
                }
            }
        @media(max-width:450px){
            padding:0 10px;
        }
    }
`
export const ScreeanWarning = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;

    .c-loader {
        animation: is-rotating 1s infinite;
        border: 6px solid #e5e5e5;
        border-radius: 50%;
        border-top-color: #51d4db;
        height: 50px;
        width: 50px;
      }
      
      @keyframes is-rotating {
        to {
          transform: rotate(1turn);
        }
      }

    .emoji{
        font-size:50px;
        margin-bottom:20px;
    }
`
export const PhotoList = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    overflow:auto;
    padding:5px;
`
