export default {
    namespaced: true,//defini o nome do módulo
    //estado central do vuex
    state: {
        produtos: []
    },
    //mudanças de estados propriedades computadas, lê o estado e faz um processamento
    getters: {
        //valorTotal(state, getters, rootState), acesso global
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0) 
        }
    },
    //setters, mudanças de estado da store, usando métodos controlado pelo vuex (state, payload)
    mutations: {
        adicionarProduto(state, produtos) {
            state.produtos.push(produtos)
        }
    },
    //regras de negócio e chamadas assincronas
    actions: {
        //commit de dentro de context
        //acesso do estado global rootState  adicionarProduto({ commit, rootState }, produtos)
        adicionarProduto({ commit }, produtos) {
            setTimeout(() => {
                commit('adicionarProduto', produtos)
            }, 1000);
        }

        //adicionar actions no raiz da app, mesmo com namespace
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, produtos) {
        //         setTimeout(() => {
        //             commit('adicionarProduto', produtos)
        //         }, 1000);
        //     }
        // }
    }
}