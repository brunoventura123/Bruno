import styled from "styled-components";

export const Container = styled.div<{pro:number}>`
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#222;
    height: 100px;
    padding: 0px 100px;
    color:#FFF;
    display:flex;
    align-items:end;
    justify-content:space-between;

    ul{
        margin-left:100px;
        font-size:20px;

        li{
            margin-right:30px;

            a{
                color:#FFF;
                padding-top:15px;
                display:inline-block;
                border-top:2px solid #f1c40f;
                cursor:pointer;
                opacity:${props=>props.pro};
            }
        }
    }
`