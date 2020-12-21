import { createStore } from 'vuex'

export default createStore({
  state: {
    carrinhoAtivo: false,
    produto: null,
    carrinho: [],
    totalCarrinho: 0,
    mensagemAlerta: "Item adicionado",
    alertaAtivo: false
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
  }
})
