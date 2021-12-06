import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#000;
    height: 80px;
    padding: 0px 30px;
    color:#FFF;
    display:flex;
    align-items:end;
    justify-content:space-between;
    z-index:88;
    
    .nav{
        background-color:rgba(0,0,0,0.95) !important;
    }

    ul{
        margin-left:100px;
        font-size:18px;
        margin-bottom:-26px;


        li{
            margin-right:30px;
            font-size:16px;

            a {
                color:#FFF !important;
                padding:13px;
                display:inline-block;
                cursor:pointer;
                border-bottom:2px solid transparent;
                opacity:.7;
                text-decoration:none;
                transition:all ease .2s;

                &:hover{
                    opacity:1;

                }
            }
            
        }
        .activ{
            color: #f1c40f !important; 
            border-bottom:2px solid #f1c40f;
            opacity:1;
        }
    }
    @media(max-width:1060px){
        padding: 0 10px;

        nav img{
            width:150px;
        }

        ul{
            margin-left:30px;
            margin-bottom:-18px;

            li {
                margin-right:2px;
                padding:10px 0;
                font-size:15px;
            }
        }
    }
    @media(max-width:767px){
        padding:10px;
        nav{
            display:flex;
            justify-content:space-between !important;
            margin:auto;

            ul {
                margin-left:30px;
                padding:10px 0;
                margin-bottom:-25px;
                li {
                padding-top:10px;
                margin-right:10px;
                font-size:16px;
            }
        }
        }
    }
`