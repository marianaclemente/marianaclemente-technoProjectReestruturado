import { createStore } from 'vuex'

export default createStore({
  state: {
    carrinhoAtivo: false,
    produto: null,
    carrinho: [],
    totalCarrinho: 0,
    mensagemAlerta: "Item adicionado",
    alertaAtivo: false,
    image: null
  },
  mutations: {
    CHANGE_CARRINHO_ATIVO(state, payload){
      state.carrinhoAtivo = payload
    },
    updateProduto(state){
        console.log("item3")
        document.title = state.produto.nome || "Techno";
        const hash = state.produto.id || "";
        history.pushState(null, null, `#${hash}`);
        
        if (state.produto) {
            console.log("item2")
            this.compararEstoque();
        }
    },
  },
  actions: {
    
  },
  getters: {
    
  },
  modules: {
  }
})
