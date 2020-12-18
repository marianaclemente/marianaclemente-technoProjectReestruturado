<template>
    <section class="produtos">
        <div v-for="item in produtos" @click="abrirModal(item.id)" :key="item.id" class="produto">
            <router-link :to="{name: 'produto', params: {id: item.id}}">
            <img :src="item.img" :alt="item.nome" class="produto_img"/>
            <div class="produto_info">
                <span class="produto_preco">{{item.preco}}</span>
                <h2 class="produto_titulo">{{item.nome}}</h2>
            </div>
            </router-link>
        </div>
    </section>
</template>

<script>
import { api } from "@/services.js";
//import dados from './../../produtos.json'
export default {
    data() {
        return {
            produtos: [],
            baseURL: "http://localhost:3000/"
        }
    },
    methods: {
        fetchProdutos() {
            //this.produtos = dados
            api.get("/produtos")
                .then(r => {
                    this.produtos = r.data;
                })
        },
        abrirModal(id) {
            console.log('porra', id)
            this.fetchProduto(id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        
        router() {
            const hash = document.location.hash;
            console()
            if (hash) {
                this.fetchProduto(hash.replace("#", ""));
            }
        }
    },
     watch: {
    url() {
      this.fetchProdutos();
    }
  },
  created() {
    this.fetchProdutos();
  }
}
</script>

<style scoped>
/* LISTA PRODUTOS */

.produtos {
    max-width: 900px;
    margin: 100px auto 0 auto;
}
.produto{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    background: #ffffff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, .1);
    cursor: pointer;
}

.produto_img{
    max-width: 300px;
    margin-right: 40 px;
}

.produto_titulo {
    font-size: 3rem;
    line-height: 1;
}

.produto_preco {
    color: rgba(0, 0, 0, .5);
}

</style>