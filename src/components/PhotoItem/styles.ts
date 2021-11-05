import styled from "styled-components";

export const Container = styled.div`

    img{
        max-width:100px;
        border-radius:10px;
        cursor:pointer;
        transition:all ease .5s;
        margin-left:10px;
        margin-bottom:10px;

        &:hover{
            box-shadow:0px 0px 5px #02044A;
            transform: scale(1.1);
        }
    }
`