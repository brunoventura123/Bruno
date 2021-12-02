import styled from "styled-components";
import Bg from '../../../assets/images/bg4.png'

export const Container = styled.div`
    height:100vh;
    color:FFF;
    
`

export const PrincipalArea = styled.div`
    width:100%;
    height:calc(100% - 80px);
    background-image:url('${Bg}');
`