import styled from "styled-components";
export default function NavBar(props){
const letra1 ="1.2vw"


const LinkMenu = styled.a`
margin-left: 0.8vw;
font-size: ${letra1};
text-decoration: none;
:hover{
    color: red;
    cursor: pointer;
    border-bottom: red 1px solid;
    transition: 1.5s;
}

` 
const NomeSite = styled.div`
margin-left: 0.8vw;
font-size: ${letra1};
`
let nomeSite  
if(!props.nomeSite){
    nomeSite = "Seu nome aqui!";  
}else{
    nomeSite = props.nomeSite;
}
let linkMenu 
if(!props.links){
    linkMenu = [
        {
            nome:"Link1",
            url:"#"
        },
        {
            nome:"Link2",
            url:"#"
        },
        {
            nome:"Link3",
            url:"#"
        },
        {
            nome:"Link3",
            url:"#"
        },
    ]
}else{
 linkMenu = props.links
}

let link = linkMenu.map(li => <LinkMenu href={li.url}>{li.nome}</LinkMenu> ) 




const ContainerMenu = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    background-color: azure;
    align-items: center;
    margin-left: 1vw;   
`  
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Logo = styled.img`
    width:  4vw;
    height: 4vw;
    background-color: beige;
`  
    return(
<ContainerMenu>
   <Logo src="" />
<NomeSite>
    {nomeSite}
</NomeSite>
   <Menu>
   {link}
   </Menu>

</ContainerMenu>
    )
}

/* Modelo de uso
   <NavBar 
   nomeSite="Flying Boys Crew"
   links = {[
    {
      nome:"Home",
      url:"http://produtos.com"
    },
    {
      nome:"Sobre",
      url:"http://sobre.com"
    },
    {
      nome:"Contato",
      url:"http://contato.com"
    },
    {
      nome:"Trabalhos",
      url:"http://trabalhos.com"
    }
   ]}
   />
   */ 
