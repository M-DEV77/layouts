import styled from 'styled-components'



export default function Seletor(props){
const ContainerSelect = styled.div`
display: flex;
flex-direction: row;
`
const Titulo = styled.div`

`
const Select = styled.select`
border-style:none;
cursor: pointer;
width: ${props.largura};
height: ${props.altura};
`
let nome = props.valores;
let nomes= nome.map(function (valor,index){
    return <option value={index}>{valor}</option> 
});



    return(
<ContainerSelect>
            <Titulo>
                {props.titulo}
            </Titulo>
            <Select name={props.name} id={props.id}> 
               {nomes}
            </Select>
</ContainerSelect>  

    )
}
