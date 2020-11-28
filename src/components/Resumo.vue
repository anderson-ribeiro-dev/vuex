<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo"> 
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <!-- <span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span> -->
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    //pode acessar produto diretamente, acesso como atributos
    //3 maneira
    computed: mapGetters('carrinho', { total: 'valorTotal' }),

    // 2 maneira
    // computed: mapGetters(["valorTotal"])
    // 1 maneira
    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // },
   
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
