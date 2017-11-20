import Vue from 'vue'
import Router from 'vue-router'
import suggest from '@/pages/suggest'
import hots from '@/pages/hots'
import search from '@/pages/search'
import songlist from '@/pages/songlist'
import song from '@/components/song'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: suggest
        },
        {
            path: '/index',
            name: 'suggest',
            component: suggest
        },
        {
            path: '/songlist/:id',
            name: 'songlist',
            component: songlist
        },
        {
            path: '/song/:id',
            name: 'song',
            component: song
        },
        {
            path: '/hots',
            name: 'hots',
            component: hots
        },
        {
            path: '/search',
            name: 'search',
            component: search
        }
    ],
})