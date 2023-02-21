import styled from'styled-components';
import Balao from './Balao';
import Foto from './Foto';

export default function Home(){

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: rgb(18,0,12);
background: -moz-linear-gradient(0deg, rgba(18,0,12,1) 54%, rgba(52,10,46,1) 150%);
background: -webkit-linear-gradient(0deg, rgba(18,0,12,1) 54%, rgba(52,10,46,1) 150%);
background: linear-gradient(90deg, rgba(18,0,12,1) 54%, rgba(52,10,46,1) 150%);

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
const ContBox1 = styled.div`
width: 50vw;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
justify-content: center;
border: 1px solid #ffffff;
border-radius: 4px;
box-shadow:
    
         0 0 50px #fff,
    -10px 0 280px #DC21B8,
     40px 0 580px #4AC0FD;
`
const Content = styled.div`
 color: #ffffff;
 width: 50%;
`
const FotoCont = styled.div`
width: 50%;
display: flex;
flex-direction: row;
align-items:center;
justify-content: flex-end;
`
const Footer=styled.div`

background-color: beige;
height:200px;
width: 50vw;

`
    
  
return(
<Container>
  <Convite>
    Você está convidado
  </Convite>
    <ContBox1>
        <Content>
            dasdasda
        </Content>
        <FotoCont>
        <Foto />
        </FotoCont>
    </ContBox1>
<Footer>

</Footer>
</Container>
 )
}