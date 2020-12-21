<template>
    <section>
        <Carrinho v-if= "$store.state.carrinhoAtivo" />
        <Alerta v-if= "$store.state.alertaAtivo" />
        <!-- <ProdutosLista/> -->
    </section>  
</template>x

<script>
// import ProdutosLista from "@/components/ProdutosLista.vue"
import Carrinho from "@/views/Carrinho.vue";
import Alerta from "@/views/Alerta.vue";

export default {
    name: "home",
    components: {
        // ProdutosLista,
        Carrinho,
        Alerta
    }
};
</script>