import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nomeContato: 'Mãe',
      prioridade: enums.Prioridade.IMPORTANTE,
      numero: '(18)99816-6602',
      email: 'mariamadalenamazetti@gmail.com',
      id: 1
    },
    {
      nomeContato: 'Eu',
      prioridade: enums.Prioridade.NORMAL,
      numero: '(18)99793-7963',
      email: 'jvmazettib@gmail.com',
      id: 2
    },
    {
      nomeContato: 'Fernando',
      prioridade: enums.Prioridade.IMPORTANTE,
      numero: '(18)99711-7554',
      email: 'fernandomazetti@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeContato.toLowerCase() ===
          action.payload.nomeContato.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
