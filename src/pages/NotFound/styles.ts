import styled from "styled-components";
import BG from './notFound.png'

export const Area = styled.div`
    height:100vh;
    background-image:url(${BG});
    background-size:cover;
    background-position:center;
    text-align:center;
    padding-top:70px;

    .button{
      background-color:blue;
      padding:8px 15px;
      border:0;
      color:#FFF;
      font-size:20px;
      border-radius:5px;

      &:hover{
        opacity:.8;
      }
    }
`