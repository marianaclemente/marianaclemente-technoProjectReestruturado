<template>
    <section class="produtos">
        <div v-for="item in produtos" @click="abrirModal(item.id)" :key="item.id" >
            <router-link :to="{name: 'produto', params: {id: item.id}}" custom v-slot="{ navigate }">
            <div role="link" @click="navigate" class="produto">
                <img :src="image" :alt="item.nome" class="produto_img"/>
                <div class="produto_info">
                    <span class="produto_preco">{{item.preco}}</span>
                    <h2 class="produto_titulo">{{item.nome}}</h2>
                </div>
            </div>
            </router-link>
        </div>
    </section>
</template>

<script>
import { api } from "@/services.js";
import image from "@/api/produtos/notebook/notebook.jpg"
export default {
    data() {
        return {
            image: image,
            produtos: [],
            baseURL: "http://localhost:3000/",
            
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