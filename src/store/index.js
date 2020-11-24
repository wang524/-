import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 100,
        Authorization: localStorage.getItem("userToken") ? localStorage.getItem("userToken") : ""
    },
    getters: {},
    mutations: {
        changeLogin(state, user) {
            state.Authorization = user.loginToken
        },
        increment(state, pload) {
            state.num += pload;
        },
        mincrement(state, pload) {
            state.num -= pload;
        }
    },
    actions: {}
})

export default store