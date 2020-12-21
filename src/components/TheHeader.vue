<template>
    <header class="header">
        <img class="logo" src="@/assets/techno.svg" alt="TechnoProject">
        <div class="carrinho_menu" @click="$store.state.carrinhoAtivo = true">{{carrinhoTotal}} | {{$store.state.carrinho.length}}</div>
    </header>
</template>

<script>

export default {
    
    data() {
        return{
            //carrinhoAtivo: false,   
        }
        
    },
    computed: {
        carrinhoTotal() {
            let total = 0;
            if (this.$store.state.carrinho.length) {
                this.$store.state.carrinho.forEach(item => {
                    total += item.preco; 
                    this.$store.state.totalCarrinho = total;
    
                })
            }
            return total;
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