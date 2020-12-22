<template>
    <header class="header">
        <img class="logo" src="@/assets/techno.svg" alt="TechnoProject">
        <div class="carrinho_menu" @click="CHANGE_CARRINHO_ATIVO(true)">{{numeroPreco(carrinhoTotal)}} | {{carrinho.length}}</div>
    </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    
    data() {
        return{
            //carrinhoAtivo: false,   
        }
        
    },
    computed: {
        ...mapState(["carrinho", "totalCarrinho"]),
        carrinhoTotal() {
            let total = 0;
            if (this.carrinho.length) {
                this.carrinho.forEach(item => {
                    total += item.preco; 
                    this.totalCarrinho = total;
    
                })
            }
            return total;
        }
    },
    methods: {
        ...mapMutations(["CHANGE_CARRINHO_ATIVO"]),
        numeroPreco(valor) {
            return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        }
    }
}
</script>

<style scoped>
/* HEADER*/

.header {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    padding: 20px 0;
    margin: 0 auto;
}

.logo {
    width: 80px;
}

.carrinho_menu::after{
    content: "";
    display: inline-block;
    background: url("./../assets/carrinho.svg") no-repeat center center;
    width: 25px;
    height: 25px;
    margin-left: 10px;
}

.carrinho_menu {
    display: flex;
    align-items: center;
    cursor: pointer;
} 

</style>