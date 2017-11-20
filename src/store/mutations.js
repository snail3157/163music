export default {
    //获取推荐
    get_suggests(state, payload) {
        state.suggests = payload
    },
    querySongListDetail(state, payload) {
        state.songlistDetail = payload
    },
    querySongList(state, payload) {
        state.songlist = payload
    },
    queryNewSong(state, payload) {
        state.songnewlist = payload
    },
    querySongDetail(state, payload) {
        state.song = payload
    },
    querySongUrl(state, payload) {
        state.songurl = payload
    },
    queryLyric(state, payload) {
        state.lyrics = payload
    },
    queryHotlist(state, payload) {
        state.songhotlist = payload
    },
    querySearchSuggest(state, payload) {
        state.searchSuggest = payload
    }
}