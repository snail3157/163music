<template>
  <div id="suggest-wrap">
    <mhead></mhead>
      <div class="photos-wrap">
          <h2 class="cate-title">
            <span>推荐歌单</span>
          </h2>
          <div class="photo-items" v-loading="loading" >
              <ul>
                  <li v-for="i in suggests" >
                      <router-link :to="{name:'songlist',params: {id: i.id}}">
                        <div>
                          <img :src="i.picUrl" />
                          <span>{{i.playCount | formatCount}}</span>
                          <p>{{i.name}}</p>
                        </div>
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class="new-wrap">
        <h2 class="cate-title">
            <span>最新音乐</span>
        </h2>
        <div class="text-items">
            <slistnew></slistnew>
        </div>
      </div>
  </div>
</template>
<script>
import mhead from '../components/mhead'
import slistnew from "../components/slistnew"
export default {
     components:{
        mhead,
        slistnew,
    },
  data(){
    return{
        originNum: 0,
        isLoading: 1,
        suggests: [],
        loading: true
    }
  },
  created(){
    //页面初始化
    this.initData()
  },
    methods:{
        async initData(){
            let res = await this.getData('queryPrSongList');
            this.suggests = res.data.result
            this.loading = false;
        },
        tolist(id){
            // this.$router.push({ path: `/songlist/${id}` }) // -> /user/123
            this.$router.push({name:'songlist', query:{id: id}});
            // this.$router.push({name:'songlist', params:{id: id}})
            // this.$router.push({ name: 'songlist', params: { id: uid }})
        }
    },
    // filters: {
    //     formatCount (v){
    //         if(v < 9999){
    //             return v;
    //         }else{
    //             return (v/10000).toFixed(0)+'万';
    //         }
    //     }
    // }
}
</script>

<style lang="less" scoped>
@import url('../style/common.less');
.cate-title{
    position: relative;
    font-size: .15rem;
    &::before{
        content: '';
        width: .1rem;
        height: .15rem;
        border-left: 2px solid @mcolor;
        margin-right: 20px;
    }
}
.photo-items{
    min-height: 1rem;
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            position: relative;
            width: 32%;
            div{
                img{
                   width: 100%; 
                }
                span{
                    position: absolute;
                    top: .05rem;
                    right: .05rem;
                    font-size: .12rem;
                    padding-left: .13rem;
                    color: #fff;
                    background-position: 0;
                    background-repeat: no-repeat;
                    background-size: .11rem .10rem;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
                }
                p{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size: .14rem;
                    line-height: 1.5;
                    color: black;
                    margin-top: .01rem;
                }
                &::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    // width: 100%;
                    height: .2rem;
                    z-index: 2;
                    background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
                }
            }
            
        }
    }
    
}
</style>
