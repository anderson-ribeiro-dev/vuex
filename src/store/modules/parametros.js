export default {
    //estado central do vuex
    state: {
        quantidade: 2,
        preco: 19.99
    },
    //setters, mudanças de estado da store, usando métodos controlado pelo vuex (state, payload)
    mutations: {
        setQuantidade(state, quantidade){
            state.quantidade = quantidade
        },
        setPreco(state, preco){
            state.preco = preco
        }
    }
}