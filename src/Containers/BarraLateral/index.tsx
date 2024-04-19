import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroContatos from '../../Components/FiltroContatos'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispach = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <>
      <S.Aside>
        <div>
          {mostrarFiltros ? (
            <>
              <Campo
                type="text"
                placeholder="Buscar contato"
                value={termo}
                onChange={(evento) =>
                  dispach(alterarTermo(evento.target.value))
                }
              />
              <S.Filtros>
                <FiltroContatos
                  valor={enums.Prioridade.NORMAL}
                  criterio="prioridade"
                  legenda="normal"
                />
                <FiltroContatos
                  valor={enums.Prioridade.IMPORTANTE}
                  criterio="prioridade"
                  legenda="importantes"
                />
                <FiltroContatos criterio="todos" legenda="todos" />
              </S.Filtros>
            </>
          ) : (
            <Botao onClick={() => navigate('/')}>
              Voltar a lista de contatos
            </Botao>
          )}
        </div>
      </S.Aside>
    </>
  )
}

export default BarraLateral
