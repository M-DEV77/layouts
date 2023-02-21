import styled, { keyframes } from "styled-components"
import foto from'../../../public/ala02.png'

export default function Foto(){
 const FotoImg=styled.img`
 height: auto;
 width: 20vw;
 position: relative;
 z-index: 5;
 animation: foto infinite 8s;
    @keyframes foto{
    0% {right:1%; top:7%;}
    25%{right:2%; top:8%;}
    50%{right:3%;top:9%}
    76% {right:3%; top:11%;}
    95%{right:2%; top:10%;}
    100%{right:1%;top:7%}
 }
 `  
    return(
<div>
    <FotoImg src={foto}/>
</div>
    )
}