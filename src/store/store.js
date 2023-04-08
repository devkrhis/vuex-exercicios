import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // aqui ele guarda o estado para poder utilizar em qualquer lugar.
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: { // mutations é como se fosse o seter, ele seta um valor.
        adicionarProduto(state, itensDoProduto){ // você só pode passar um unico parametro adicional. Ou é só o state, ou state, payload "Pode mudar quando quiser isso" do payload.
            state.produtos.push(itensDoProduto)
        }
    },
    actions: {

//        adicionarProduto(context, payload){ -> da para fazer dessa forma também, igual a de baixo, porém a de baixo a gente está destruturando o codigo.
//            setTimeout(() => {
//                context.commit('adicionarProduto', payload)
//            }, 1000)
//        }
        adicionarProduto({ commit }, payload){
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
})