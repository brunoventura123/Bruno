import styled from "styled-components";



export const Container = styled.div`
@keyframes move {
    0%{margin-top: 0;}
    50%{margin-top: 10px;}
    100%{margin-top: 0;}
}
    width:50px;
    height:50px;
    position:fixed;
    bottom:10px;
    right:10px;

    img{
        margin-right:10px;
        border-radius:50%;
        box-shadow:0px 0px 7px #000;
        cursor:pointer;
        animation: move;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }
`