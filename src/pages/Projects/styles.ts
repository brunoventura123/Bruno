import styled from "styled-components";


export const Container = styled.div`
    height:calc(100vh - 100px);
    margin-top:100px;
    overflow:auto; 
    padding:20px 20px;
    
`

export const ProjectArea = styled.div`
    width:100%;
    height:100%;

    h3{
        color:#FFF;
        text-align:center;
    }

    .project{
        border-radius:5px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;

        img{
            width:200px;
            height:100px;
            border-radius:5px;
            cursor:pointer;
            transition:all ease .2s;
            opacity:.9;
            margin-right:5px;
            margin-bottom:5px;

            &:hover{
                transform:scale(1.1);
                opacity:1;
            }
            
        }
    }
`
