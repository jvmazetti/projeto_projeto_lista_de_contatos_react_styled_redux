import * as enums from '../utils/enums/Contato'

class Contato {
  nomeContato: string
  prioridade: enums.Prioridade
  numero: string
  email: string
  id: number

  constructor(
    nomeContato: string,
    prioridade: enums.Prioridade,
    numero: string,
    email: string,
    id: number
  ) {
    this.nomeContato = nomeContato
    this.prioridade = prioridade
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
