import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../Containers/BarraLateral'
import ListaDeContatos from '../../Containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeContatos />
      <BotaoAdicionar />
    </>
  )
}

export default Home
