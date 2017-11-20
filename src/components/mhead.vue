<template>
<div>
    <div class="mheader">
        <ul>
            <li :class="{active: tab === 'index'}" @click="indexTab('index')"><span>推荐音乐</span></li>
            <li :class="{active: tab === 'hots'}" @click="indexTab('hots')"><span>热歌榜</span></li>
            <li :class="{active: tab === 'search'}" @click="indexTab('search')"><span>搜索</span></li>
        </ul>
    </div>
    <div class="mheader-clear">

    </div>
</div>
  
</template>
<script>
export default {
  data(){
      return{
          tab: 'index'
      }
  },
  created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      var tmpArr = this.$route.path.split('/')
      if(!tmpArr[1]){
          tmpArr[1] = 'index'
      }
      this.tab = tmpArr[1]
    },
  methods:{
      indexTab(tab){
        this.tab = tab;
        this.$router.push(tab)
      }
  }
}
</script>

<style lang="less" scoped>
@import url('../style/common.less');
.mheader-clear{
    height: 0.45rem;
    width: 100%;
    clear: both;
}
.mheader{
    width: 100%;
    height: .33rem;
    border-bottom:1px solid gray;
    padding-top: .12rem; 
    text-align: center;
    background-color: #fcfcfd;
    position: fixed;
    z-index: 5;
    ul{
        display: flex;
        font-size: .17rem;
        li{
            width: 33%;
            height: .33rem;
            justify-content: space-around;
            span{
                display: inline-block;
                height: .33rem;
                margin-top: -1px
            }
            &.active span{
                color: @mcolor;
                border-bottom:2px solid @mcolor; 
            }
        }
    }
}
</style>
