export default {
    //获取推荐
    get_suggests(state, payload) {
        state.suggests = payload
    },
    querySongListDetail(state, payload) {
        state.songlistDetail = payload
    },
    querySearchSuggest(state, payload) {
        state.searchSuggest = payload
    }
}