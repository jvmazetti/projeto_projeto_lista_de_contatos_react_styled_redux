import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeContato, setNomeContato] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      nomeContato,
      prioridade,
      numero,
      email,
      9
    )
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }
  return (
    <>
      <MainContainer>
        <Titulo>Novo Contato</Titulo>
        <Form onSubmit={cadastrarContato}>
          <Campo
            value={nomeContato}
            onChange={(evento) => setNomeContato(evento.target.value)}
            type="text"
            placeholder="Nome do Contato"
          />
          <Campo
            value={numero}
            onChange={(evento) => setNumero(evento.target.value)}
            as="textarea"
            placeholder="Número"
          />
          <Campo
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            as="textarea"
            placeholder="Email"
          />
          <Opcoes>
            <p>Prioridade:</p>
            {Object.values(enums.Prioridade).map((prioridade) => (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  onChange={(evento) =>
                    setPrioridade(evento.target.value as enums.Prioridade)
                  }
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
          </Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </MainContainer>
    </>
  )
}

export default Formulario
