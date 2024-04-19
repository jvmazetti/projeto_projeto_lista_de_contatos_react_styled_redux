import { useState, useEffect } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nomeContato,
  prioridade,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }
  return (
    <>
      <S.Card>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {nomeContato}
        </S.Titulo>
        <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
        <S.Numero
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.BarraDeAcoes>
          {estaEditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      nomeContato,
                      prioridade,
                      numero,
                      email,
                      id
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.BarraDeAcoes>
      </S.Card>
    </>
  )
}

export default Contato
