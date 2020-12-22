<template>
    <section>
        <Carrinho v-if= "$store.state.carrinhoAtivo" />
        <!-- <ProdutosLista/> -->
    </section>  
</template>x

<script>
// import ProdutosLista from "@/components/ProdutosLista.vue"
import Carrinho from "@/views/Carrinho.vue";



export default {
    name: "home",
    components: {
        // ProdutosLista,
        Carrinho,
    }
};
</script>