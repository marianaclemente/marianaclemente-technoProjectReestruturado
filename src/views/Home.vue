<template>
    <section>
        <ProdutosLista/>
    </section>  
</template>

<script>
import ProdutosLista from "@/components/ProdutosLista.vue"


export default {
    name: "home",
    components: {
        ProdutosLista,
    }
};
</script>