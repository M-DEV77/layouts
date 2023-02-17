import styled from'styled-components';
import Balao from './Balao';

export default function Home(){

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
background: rgb(18,0,12);
background: -moz-linear-gradient(0deg, rgba(18,0,12,1) 54%, rgba(52,10,46,1) 150%);
background: -webkit-linear-gradient(0deg, rgba(18,0,12,1) 54%, rgba(52,10,46,1) 150%);
background: linear-gradient(90deg, rgba(18,0,12,1) 54%, rgba(52,10,46,1) 150%);

` 
const Foto = styled.div`
height: 100%;
width: 100vw;
//background-image: url('../../ala02.jpg');
//-webkit-mask-image: linear-gradient(to left, transparent 30%, black 150%);
//background-size:cover;


`
const Convite = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: #FCFCF2;
font-size: 2vw;
animation-name: anime1;

`

    
  
return(
<Container>
<Convite>
    Você está convidado
</Convite>
<Balao x={20} y={20} tempo="1.8s" tamanho={5}>15 Anos </Balao>
<Balao x={10} y={30} tempo="1s" tamanho={3}>Alana</Balao>
<Foto>
    

Alana Luiza
15 Anos 
Local Chácara Fabe
Rua Rotterdam n° 325
Guarituba Piraquara PR 
22 julho 20 horas
Traje: A fantasia
confirmar presença até de julho através do WhatsApp
</Foto>
</Container>
)
}