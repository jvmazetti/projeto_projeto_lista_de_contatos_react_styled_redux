import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
}

function retornaCorDeFundo(props: TagProps): string {
  if ('prioridade' in props) {
    if (props.prioridade === enums.Prioridade.NORMAL) return variaveis.amarelo
    return variaveis.amarelo2
  } else {
    return '#ccc'
  }
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  margin-top: 8px;
`

export const Numero = styled.textarea`
  color: #000;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  margin-top: 16px;
`

export const Email = styled.textarea`
  color: #000;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  margin-bottom: 16px;
  outline: none;
  margin-top: 16px;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
