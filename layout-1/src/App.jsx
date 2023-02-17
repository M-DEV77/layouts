import NavBar from './assets/components/NavBar'
export default function App() {
  
  return (
    <>
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
    
    </>
  )
}


