import getData from '../api/getData'
export default {
    async initIndex(context) {
        let res = await getData('queryPrSongList');
        context.commit('get_suggests', res.data.result)
    },
    async getsonglistDetail(context, payload) {
        let res = await getData('querySongListDetail', { 'id': payload });
        context.commit('querySongListDetail', res.data)
    },
    async getsonglist(context, payload) {
        let res = await getData('querySongListDetail', { 'id': payload });
        context.commit('querySongList', res.data.playlist.tracks)
    },
    async getnewlist(context, payload) {
        let res = await getData('queryNewSong');
        context.commit('queryNewSong', res.data.result)

    },
    async getsongDetail(context, payload) {
        let res = await getData('querySongDetail', { 'ids': payload });
        context.commit('querySongDetail', res.data.songs[0])
    },
    async getsongUrl(context, payload) {
        let res = await getData('queryMusicUrl', { 'id': payload });
        context.commit('querySongUrl', res.data.data[0].url)
    },
    async getsongLyric(context, payload) {
        let res = await getData('queryLyric', { 'id': payload });
        context.commit('queryLyric', res.data.lrc.lyric)
    },
    async gethotlist(context, payload) {
        let res = await getData('queryhotList')
        context.commit('queryHotlist', res.data.result.tracks)
    },
    //获取歌曲播放所需接口
    async get_PlaySongDetails(context, payload) {
        context.dispatch('getsongUrl', payload);
        context.dispatch('getsongDetail', payload);
        context.dispatch('getsongLyric', payload)
            // context.dispatch('get_Lyric', {
            // id: payload
            // });
    },
    async getSearchSuggest(context, payload) {
        let res = await getData('querySearchSuggest', payload);
        context.commit('querySearchSuggest', res.data.result)
        console.log(JSON.stringify(res.data.result))
    }
}