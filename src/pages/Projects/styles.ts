import styled from "styled-components";


export const Container = styled.div`
    height:calc(100vh - 100px);
    margin-top:80px;
    overflow:auto; 
    padding:20px 20px;

    

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
`

export const ProjectArea = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    h3{
        color:#FFF;
        text-align:center;
        text-shadow:0px 0px 3px #000;
        margin:0px 0 30px 0;
    }
    .project{
        border-radius:5px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;

        a{
            width:300px;
            height:150px;
            margin-right:15px;
            margin-bottom:15px;
            text-decoration:none;
            transition:all ease .5s;
            border-radius:10px;
            cursor:pointer;

            &:hover{
                transform:scale(1.1);
            }
        }
        img{
            width:300px;
            height:150px;
            border-radius:10px;
            border:2px solid #000;
        }
        .desc{
            position:relative;
            background-color:rgba(0,0,0,0.8);
            color:#FFF;
            width:300px;
            height:150px;
            margin-top:-150px;
            transition:all ease .5s;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            opacity:0;
            padding:10px;
            border-radius:10px;

            &:hover{
                opacity:1;
            }
        }
    }

    @media(max-width:1000px){
        h3{
            font-size:24px;
        }
    }
    @media(max-width:450px){
        h3{
            font-size:20px;
        }
        .project a{
            margin-right:0;
        }
    }
`
