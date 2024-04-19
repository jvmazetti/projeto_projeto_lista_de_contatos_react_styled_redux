import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'todos'
  valor?: enums.Prioridade
}

const FiltroContatos = ({ legenda, criterio, valor }: Props) => {
  const dispach = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const verificaSeEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'prioridade') {
      return contatos.itens.filter((item) => item.prioridade === valor).length
    }
  }

  const filtrar = () => {
    dispach(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaSeEstaAtivo()

  return (
    <>
      <S.Card ativo={ativo} onClick={filtrar}>
        <S.Contador>{contador}</S.Contador>
        <S.Label>{legenda}</S.Label>
      </S.Card>
    </>
  )
}

export default FiltroContatos
