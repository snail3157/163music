// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './config/rem.js'
import './style/style.css'
import store from './store/index.js'
import getData from './api/getData'
Vue.config.productionTip = false
Vue.prototype.getData = getData
Vue.use(Loading.directive)
Vue.filter('formatCount', function(v) {
        // 返回处理后的值
        if (v < 9999) {
            return v;
        } else {
            return (v / 10000).toFixed(0) + '万';
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})