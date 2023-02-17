import styled from "styled-components";

export default function Balao(props){
    let letra = props.tamanho/5+"vw"
    const Bal =styled.div`
    position: absolute;
    top:${props.x+"vw"};
    left: ${props.y+"vw"};
    width: ${props.tamanho+"vw"};
    height: ${props.tamanho+"vw"};
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${letra};
    font-size: ${letra};
    justify-content: center;
    color: #f7f1de;
    animation: lua ${props.tempo} infinite;
    @keyframes lua {
      0%{
        box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px #DC21B8,
    inset -20px 0 80px #4AC0FD,
    inset 20px 0 300px #DC21B8,
    inset -20px 0 300px #4AC0FD,
    0 0 50px #fff,
    -10px 0 80px #DC21B8,
    10px 0 80px #4AC0FD;
      }
      100%{
        box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 180px #ff01cc,
    inset -50px 0 180px #052cda,
    inset 20px 0 300px #DC21B8,
    inset -20px 0 300px #003afa,
    0 0 50px #fff,
    -10px 0 280px #DC21B8,
    40px 0 580px #4AC0FD;

      }  
    }
    :hover{
    cursor: pointer;    
    
    }
    `
    return(<>
    <Bal>
    {props.children}
    </Bal>
    
    </>)
}