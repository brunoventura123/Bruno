import * as C from './styles'

type Props = {
    url:string;
    onClick:any
}

export const PhotoItem = ({ url, onClick}:Props) => {
 const handleClick = ()=>{
    onClick(url)
 }
    
    return(
        <C.Container onClick={handleClick} >
            <img  src={url} alt="" />
          
        </C.Container>
    )
}