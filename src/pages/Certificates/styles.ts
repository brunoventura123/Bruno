import styled from "styled-components";


export const Container = styled.div`
    margin:auto;
    margin-top:80px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
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
    flex-wrap:wrap;
    overflow:auto;

    &::-webkit-scrollbar {
        width: 12px;               
      }
      
      &::-webkit-scrollbar-track {
        background: #4c4c4c; 
        border-radius:3px;       
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: #000;    
        border-radius: 10px;       
        border: 3px solid #4c4c4c;  
      }

    .certItem{
        margin:5px;
        
        img{
            border-radius:10px;
            width:430px;
        }
    }

    @media(max-width:450px){
        .certItem img{
            width:300px;
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
