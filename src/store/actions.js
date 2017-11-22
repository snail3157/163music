import getData from '../api/getData'
export default {
    async getsonglistDetail(context, payload) {
        let res = await getData('querySongListDetail', { 'id': payload });
        context.commit('querySongListDetail', res.data)
    },
    async getSearchSuggest(context, payload) {
        let res = await getData('querySearchSuggest', payload);
        context.commit('querySearchSuggest', res.data.result)
    }
}