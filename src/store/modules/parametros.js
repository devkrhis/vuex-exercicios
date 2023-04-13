export default {
    state: { // aqui ele guarda o estado para poder utilizar em qualquer lugar.
        quantidade: 0,
        preco: 0
    },
    mutations: { // mutations é como se fosse o seter, ele seta um valor.
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    },
}