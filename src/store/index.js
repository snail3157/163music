import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    suggests: [],
    songlistDetail: [],
    songlist: [],
    song: [],
    songurl: [],
    lyrics: [],
    searchSuggest: []
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})