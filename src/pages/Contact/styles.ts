import styled from "styled-components";

export const Container = styled.div<{sends:boolean}>`
    height:calc(100vh - 80px);
    margin:auto;
    margin-top:80px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row;
    overflow:hidden;
    color:#FFF;

    .modalsucsses{
        position:absolute;
        top:0;
        legt:0
        right:0;
        bottom:0;
        width:100vw;
        height:${props=>props.sends ? '100vh' : '0vh'};
        display:flex;
        align-items:center;
        justify-content:center;
        transition:all ease .3s;
        z-index:94;
        
        .sucsses{
            position:fixed;
            width:300px;
            height:150px;   
            top:0; 
            margin-top:${props=>props.sends ? '0' : '-160px'};
            transition:all ease .3s;
            font-size:16px;
            cursor:pointer;
    
            p{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                color:#008037;
                text-align:center;
                background-color:#f3f3f3;
                font-weight:bold;
                width:300px;
                height:150px;
                padding:10px 0;
                border-radius:10px;
                box-shadow:0px 0px 5px #fff;
    
                button{
                    margin:auto;
                    outline:0;
                    padding: 5px 15px;
                    background-color: #008037;
                    resize:none;
                    border:0;
                    border-radius:5px;
                    color:#FFF;
                }
                
            }
        }
    }

    @media(max-width:760px){
        flex-direction:column;
        justify-content:flex-start;
        overflow:auto;
        height:100%;
        padding-top:30px;
    }
    
`
export const FormArea = styled.div<{colors:string}>`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;

    .contactArea{
        width: 300px;
        height:auto;
        background-color: #FFF;
        border-radius:10px;
        
    }

    .contact{
        background-color: #02044A;
        text-align:center;
        padding:20px;
        font-size:20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }


    #form{
        display:flex;
        flex-direction:column;
        background-color:transparent;
        padding-top:20px;
        border-bottom-right-radius:10px;
        border-bottom-left-radius: 10px;

        input, textarea{
            margin:auto;
            width:260px;
            margin-bottom:20px;
            outline:0;
            padding: 10px 5px;
            font-size:16px;
            background-color: #666;
            resize:none;
            border:${props=>props.colors};
            border-radius:5px;
            color:#02044A;
            
        }
        input::placeholder{
            color: #FFF;
        }
        textarea::placeholder{
            color: #FFF;
        }
        input[type="submit"]{
            background-color:#02044A;
            border:0;
            outline:0;
            color:#FFF;
            font-size:16px;

            &:hover{
                opacity:.9;
            }
            
        }
        textarea{
            resize:none;
            height:150px;
        }
    }
    @media(max-width:450px){
        .contact{
            font-size:16px;
        }
        input, textarea{
            font-size:14px !important;
        }
        input[type="submit"]{
            font-size:14px;
        }
    }

`

export const SocialArea = styled.div`
    flex:1;
    border-left:1px solid #f1c40f;
    height: 80%;
    padding:0 30px;
    text-align:center;
    
    .socialarea{
        display:flex;
        justify-content: space-around;
        margin-top: 100px;
        padding:0 100px;
        text-align:center;

        a{
            text-decoration:none;
        }
        
        label{
            cursor:pointer;
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        img{
            width:40px;
            height:40px;
            transition:all ease .2s;
            
            &:hover{
                transform:rotate(-45deg) scale(1.1);
               
            }
        }
        
    }
    p{
        font-size:16px;
        margin:auto;
        margin-top: 50px;
        width: 70%;
       
    }
    footer{
        color:#999;
        margin-top:100px;
    }

    @media(max-width:1000px){
        .socialarea{
            padding: 0 30px;
        }
    }
    @media(max-width:760px){
            border:0;
            margin:20px 30px;
            margin-top:30px;
            border-top:1px solid #f1c40f;
    }
    @media(max-width:450px){
        padding:0 10px;
        margin-top: 50px;
        .socialarea{
            padding:0;
            font-size:14px;
            margin-top:50px;

            img{
                width:30px;
                height:30px;
            }
        }
        p{
            width:100%;
            font-size:14px;
        }
        footer{
            font-size:14px;
            margin-top:50px;
        }
    }
`