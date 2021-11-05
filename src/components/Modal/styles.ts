import styled from "styled-components";

export const Container = styled.div<{modal:boolean}>`
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
    transition:all ease .5s;

    .close{
        position:absolute;
        right:0;
        top:0;
        margin-right: 170px;
        margin-top: 80px;
        cursor:pointer;
    }
`