import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from  './getters' //pega todos os métodos

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: "Maria",
        sobrenome: " da Silva"
    },
    getters,
    modules: { carrinho, parametros }
})
